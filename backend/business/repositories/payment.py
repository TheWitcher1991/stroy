from datetime import timedelta
from decimal import Decimal

from django.utils import timezone
from yookassa.domain.response import PaymentResponse

from business.models import Invoice
from business.services.payment import PaymentService
from config.settings import PAYMENT_DAYS_TO_EXPIRE


class PaymentRepository:

    @staticmethod
    def payment_description(invoice: Invoice) -> str:
        return (
            f"Оплата за интернет по счёту № {invoice.pk} от {invoice.created_at.strftime('%d.%m.%Y')}, "
            f"Сумма: {invoice.amount} руб. Без НДС."
        )

    @staticmethod
    def create_payment(invoice: Invoice) -> PaymentResponse:
        return_url = PaymentService.return_url
        description = PaymentRepository.payment_description(invoice)

        payment = PaymentService.create(
            {
                "amount": {
                    "value": str(invoice.amount),
                    "currency": "RUB",
                },
                "payment_method_data": {
                    "type": invoice.payment_method,
                },
                "confirmation": {
                    "type": "redirect",
                    "return_url": f"{return_url}?invoice={invoice.pk}",
                },
                "metadata": {
                    "invoice": invoice.pk,
                    "department": invoice.department.pk,
                },
                "receipt": {},
                "capture": True,
                "description": description,
            }
        )

        invoice.payment_id = payment.id
        invoice.payment_method = payment.payment_method.type
        invoice.payment_url = payment.confirmation.confirmation_url
        invoice.expires_at = payment.expires_at or timezone.now() + timedelta(days=PAYMENT_DAYS_TO_EXPIRE)

        invoice.save()

        return payment

    @staticmethod
    def capture_payment(payment_id: str, payment_amount: Decimal) -> bool:
        return PaymentService.capture(payment_id, payment_amount)

    @staticmethod
    def cancel_payment(payment_id: str) -> bool:
        return PaymentService.cancel(payment_id)
