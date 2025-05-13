from django.db.models import QuerySet
from django.utils import timezone
from rest_framework.exceptions import ValidationError

from business.exceptions import InsufficientBalanceException
from business.models import Invoice
from business.repositories.payment import PaymentRepository
from business.repositories.wallet import WalletRepository
from business.types import InvoiceTarget
from config.settings import MIN_BALANCE_DEPOSIT
from packages.mixins import AbstractRepository


class BuildInvoiceRepository(AbstractRepository[Invoice]):
    model = Invoice
    cache_prefix = "invoices"

    def optimize(self) -> QuerySet[Invoice]:
        return self.model.objects.select_related("department")

    def _build_description(self, invoice: Invoice) -> str:
        if invoice.target == InvoiceTarget.WALLET:
            return (
                f"Зачисление на лицевой счёт по Договору № {invoice.department.id} "
                f"от {invoice.department.created_at.strftime('%d.%m.%Y')} г."
            )
        elif invoice.target == InvoiceTarget.PAYMENT:
            return f"Оплата Stroy Плюс по договору № {invoice.department.id} от {invoice.department.created_at.strftime('%d.%m.%Y')} г."

        raise ValueError("Invalid invoice target")

    def create_invoice(self, **kwargs) -> Invoice:
        invoice = self.model(**kwargs)

        if invoice.target == InvoiceTarget.WALLET and invoice.amount < MIN_BALANCE_DEPOSIT:
            raise ValidationError(f"Минимальная сумма пополнения лицевого счета {MIN_BALANCE_DEPOSIT}")

        invoice.description = self._build_description(invoice)

        invoice.save()

        if invoice.target == InvoiceTarget.WALLET:
            PaymentRepository.create_payment(invoice)

        return invoice

    def capture_invoice(self, invoice_id: int) -> Invoice:
        invoice = self.get_by_id(invoice_id)

        if invoice.is_paid:
            return invoice

        if invoice.target == InvoiceTarget.PAYMENT and invoice.department.wallet.balance < invoice.amount:
            raise InsufficientBalanceException(
                f"Недостаточно средств. Не хватает {invoice.amount - invoice.department.wallet.balance} руб."
            )

        invoice.is_paid = True
        invoice.captured_at = timezone.now()
        invoice.save()

        if invoice.payment_id:
            PaymentRepository.capture_payment(invoice.payment_id, invoice.amount)

        if invoice.target == InvoiceTarget.PAYMENT:
            WalletRepository.withdraw(pk=invoice.department.wallet.id, amount=invoice.amount)
        elif invoice.target == InvoiceTarget.WALLET:
            WalletRepository.deposit(pk=invoice.department.wallet.id, amount=invoice.amount)
        else:
            raise ValueError("Invalid invoice target")

        return invoice

    def cancel_invoice(self, invoice_id: int) -> Invoice:
        invoice = self.get_by_id(invoice_id)
        invoice.delete()

        if invoice.is_paid:
            raise ValidationError("Нельзя отменить уже оплаченный платёж")

        if invoice.payment_id:
            PaymentRepository.cancel_payment(invoice.payment_id)

        return invoice


InvoiceRepository = BuildInvoiceRepository()
