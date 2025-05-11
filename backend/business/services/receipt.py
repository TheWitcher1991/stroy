from yookassa import Configuration, Receipt
from yookassa.domain.response import ReceiptListResponse, ReceiptResponse

from config.settings import YOOKASSA_ACCOUNT_ID, YOOKASSA_DEBUG, YOOKASSA_SECRET_KEY

Configuration.account_id = YOOKASSA_ACCOUNT_ID
Configuration.secret_key = YOOKASSA_SECRET_KEY


class ReceiptService:
    is_test: bool = YOOKASSA_DEBUG

    @staticmethod
    def create(receipt_data: dict) -> ReceiptResponse:
        return Receipt.create(receipt_data)

    @staticmethod
    def get(receipt_id) -> ReceiptResponse:
        return Receipt.find_one(receipt_id)

    @staticmethod
    def list(params=None) -> ReceiptListResponse:
        return Receipt.list(params)
