from typing import Type

from yookassa import Payment
from yookassa.domain.response import PaymentResponse

from business.models import Invoice


class PaymentRepository:
    model = Payment

    def payment_description(self, payment: Invoice) -> str:
        return f"Оплата за интернет-услуги по счёту № {payment.pk} от {payment.created_at.strftime('%d.%m.%Y')} г. Сумма {payment.amount}. Без НДС"

    def create_payment(self, invoice: Invoice) -> PaymentResponse:
        pass

    def capture_invoice(self, invoice_id: int) -> Type[NotImplementedError] | bool:
        pass

    def cancel_invoice(self, invoice_id: int) -> bool:
        pass
