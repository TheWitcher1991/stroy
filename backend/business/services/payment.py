from decimal import Decimal

from yookassa import Configuration, Payment
from yookassa.domain.response import PaymentListResponse, PaymentResponse

from config.settings import YOOKASSA_ACCOUNT_ID, YOOKASSA_DEBUG, YOOKASSA_RETURN_URL, YOOKASSA_SECRET_KEY

Configuration.account_id = YOOKASSA_ACCOUNT_ID
Configuration.secret_key = YOOKASSA_SECRET_KEY


class PaymentService:
    is_test: bool = YOOKASSA_DEBUG
    return_url: str = YOOKASSA_RETURN_URL

    @staticmethod
    def create(payment_data: dict):
        return Payment.create(payment_data)

    @staticmethod
    def find_one(payment_id: str) -> PaymentResponse:
        return Payment.find_one(payment_id)

    @staticmethod
    def list() -> PaymentListResponse:
        return Payment.list()

    @staticmethod
    def capture(payment_id: str, payment_amount: Decimal, payment_currency: str = "RUB"):
        return Payment.capture(
            payment_id,
            {
                "amount": {
                    "value": payment_amount,
                    "currency": payment_currency,
                },
            },
        )

    @staticmethod
    def cancel(payment_id: str):
        return Payment.cancel(payment_id)
