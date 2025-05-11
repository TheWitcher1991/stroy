from rest_framework.exceptions import APIException
from rest_framework.status import HTTP_400_BAD_REQUEST, HTTP_500_INTERNAL_SERVER_ERROR

from packages.utils import t


class InsufficientBalanceException(APIException):
    status_code = HTTP_400_BAD_REQUEST
    default_detail = t("Недостаточно средств на балансе для выполнения операции")
    default_code = "insufficient_balance"


class WebhookProcessingException(APIException):
    status_code = HTTP_500_INTERNAL_SERVER_ERROR
    default_detail = t("Ошибка при обработке webhook")
    default_code = "webhook_processing_error"
