from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK, HTTP_400_BAD_REQUEST

from business.filters import InvoiceFilter
from business.repositories.invoice import InvoiceRepository
from business.repositories.subscription import SubscriptionRepository
from business.repositories.wallet import WalletRepository
from business.serializers import (
    DepositSerializer,
    InvoiceSerializer,
    InvoiceWebhookSerializer,
    SubscribeSerializer,
    SubscriptionSerializer,
    WalletSerializer,
)
from business.webhooks import InvoiceWebHook
from config.settings import YOOKASSA_RETURN_URL
from packages.caching import CachedSetMixin
from packages.controllers import AnonymousController, BaseController, CreateController, ModelSetController


class InvoiceViewSet(CachedSetMixin, ModelSetController):

    queryset = InvoiceRepository.optimize()
    serializer_class = InvoiceSerializer
    filterset_class = InvoiceFilter
    tag_cache = InvoiceRepository.cache_prefix


class UnsubscribeController(BaseController):

    def post(self, request, *args, **kwargs) -> Response:
        SubscriptionRepository.unsubscribe(request.user.department)
        return Response({"detail": "Подписка деактивирована"})


class RenewController(BaseController):
    def post(self, request, *args, **kwargs) -> Response:
        SubscriptionRepository.renew(request.user.department)
        return Response({"detail": "Подписка восстановлена"})


class SubscribeController(CreateController):

    queryset = SubscriptionRepository.optimize()
    serializer_class = SubscribeSerializer


class SubscriptionController(BaseController):

    queryset = SubscriptionRepository.optimize()
    serializer_class = SubscriptionSerializer

    def get_object(self):
        return SubscriptionRepository.current(self.request.user.department)

    def get(self, request, *args, **kwargs) -> Response:
        instance = self.get_queryset()
        serializer = self.get_serializer(instance)
        return Response(serializer.data)


class WalletController(BaseController):

    queryset = WalletRepository.optimize()
    serializer_class = WalletSerializer

    def get(self, request, *args, **kwargs) -> Response:
        try:
            instance = self.get_queryset().first()
        except WalletRepository.DoesNotExist:
            instance = WalletRepository.create(department=request.user.department)
        serializer = self.get_serializer(instance)
        return Response(serializer.data)


class DepositController(CreateController):

    queryset = InvoiceRepository.optimize()
    serializer_class = DepositSerializer


class WebhookController(AnonymousController):

    serializer_class = InvoiceWebhookSerializer

    @method_decorator(csrf_exempt, name="dispatch")
    def post(self, request, *args, **kwargs) -> Response:
        webhook = InvoiceWebHook(request=request)
        if webhook.execute():
            return Response({"detail": "Подтверждение оплаты прошло успешно"}, status=HTTP_200_OK)
        else:
            return Response({"detail": "Ошибка при обработке вебхука"}, status=HTTP_400_BAD_REQUEST)
