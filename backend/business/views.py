from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK, HTTP_400_BAD_REQUEST

from business.repositories.invoice import InvoiceRepository
from business.repositories.subscription import SubscriptionRepository
from business.repositories.wallet import WalletRepository
from business.serializers import DepositSerializer, InvoiceWebhookSerializer, SubscriptionSerializer, WalletSerializer
from business.webhooks import InvoiceWebHook
from packages.controllers import AnonymousController, BaseController, CreateController


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
            instance = self.get_queryset()
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
