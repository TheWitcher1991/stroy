from rest_framework.exceptions import PermissionDenied

from config.settings import YOOKASSA_WEBHOOK_SIGNATURE, YOOKASSA_WHITE_LIST
from packages.utils import get_client_ip, is_ip_allowed


def check_webhook_token(request):
    token = request.GET.get("token") or request.headers.get("X-Hook-Token")
    if token != YOOKASSA_WEBHOOK_SIGNATURE:
        raise PermissionDenied("Неверный webhook токен")


def check_webhook_request(request):
    ip = get_client_ip(request)

    if not is_ip_allowed(ip, YOOKASSA_WHITE_LIST) and not check_webhook_token(request):
        return False
    return True
