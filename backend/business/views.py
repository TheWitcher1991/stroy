from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK, HTTP_400_BAD_REQUEST

from business.repositories.invoice import InvoiceRepository
from business.repositories.wallet import WalletRepository
from business.serializers import DepositSerializer, InvoiceWebhookSerializer, WalletSerializer
from business.webhooks import InvoiceWebHook
from packages.controllers import AnonymousController, BaseController, CreateController


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
