from typing import Optional

from django.db import transaction
from rest_framework.request import Request
from yookassa.domain.notification import PaymentWebhookNotification, WebhookNotificationEventType
from yookassa.domain.response import PaymentResponse

from business.exceptions import WebhookProcessingException
from business.models import Invoice
from business.repositories.invoice import InvoiceRepository
from business.services.payment import PaymentService
from business.utils import check_webhook_request


class InvoiceWebHook:

    def __init__(self, request: Request) -> None:
        self.request: Request = request
        self.json: Optional[str] = None
        self.payment: Optional[PaymentResponse] = None
        self.invoice: Optional[Invoice] = None
        self.webhook: Optional[PaymentWebhookNotification] = None

    def parse_json(self):
        self.json = self.request.data

    def receive_webhook_object(self):
        self.webhook = PaymentWebhookNotification(self.json)

    def get_payment(self):
        self.payment = PaymentService.find_one(self.webhook.object.id)

    def get_invoice(self):
        self.invoice = InvoiceRepository.get(payment_id=self.payment.id)

    def process_event(self):
        event_map = {
            WebhookNotificationEventType.PAYMENT_SUCCEEDED: self.capture_invoice,
            WebhookNotificationEventType.PAYOUT_CANCELED: self.cancel_invoice,
        }

        action = event_map.get(self.webhook.event)

        if not action:
            raise WebhookProcessingException(f"Неизвестное событие: {self.webhook.event}")

        action()

    def cancel_invoice(self):
        InvoiceRepository.cancel_invoice(self.invoice.pk)

    def capture_invoice(self):
        InvoiceRepository.capture_invoice(self.invoice.pk)

    @transaction.atomic
    def execute(self) -> bool:
        if not check_webhook_request(self.request):
            raise WebhookProcessingException("Ошибка при проверке подписи запроса")

        self.parse_json()
        self.receive_webhook_object()
        self.get_payment()
        self.get_invoice()
        self.process_event()

        return True
