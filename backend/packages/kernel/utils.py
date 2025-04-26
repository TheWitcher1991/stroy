from django.contrib.contenttypes.models import ContentType
from django.utils.translation import gettext_lazy


def t(value: str) -> str:
    return gettext_lazy(value)


def get_content_type_for_model(model, for_concrete_model=True) -> ContentType:
    return ContentType.objects.get_for_model(model, for_concrete_model)


def jwt_encode(user, is_refresh=False):
    raise NotImplementedError


def jwt_decode(token) -> dict | None:
    raise NotImplementedError


def jwt_is_valid(token) -> bool:
    raise NotImplementedError