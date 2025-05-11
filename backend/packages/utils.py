import mimetypes
from datetime import datetime, timedelta

import jwt
from django.contrib.contenttypes.models import ContentType
from django.core.files.uploadedfile import UploadedFile
from django.utils.translation import gettext_lazy
from num2words import num2words
from rest_framework.exceptions import ValidationError

from config.settings import HASH_ALGORITHM, SECRET_KEY, SESSION_EXPIRE_DAYS, SESSION_EXPIRE_MINUTES


def get_content_type(file: UploadedFile) -> str:
    return file.content_type or mimetypes.guess_type(file.name)[0]


def decimal_to_words(number) -> str:
    integer_part = int(number)
    fractional_part = int(round((number - integer_part) * 100))

    integer_part_words = num2words(integer_part, lang="ru")
    fractional_part_words = num2words(fractional_part, lang="ru")

    return f"{integer_part_words} рублей {fractional_part_words} копеек"


def get_file_type(file: UploadedFile) -> str:
    content_type = get_content_type(file)

    if content_type:
        if content_type.startswith("image/"):
            return "image"
        elif content_type in ("application/pdf",):
            return "pdf"
        elif content_type in (
            "application/msword",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ):
            return "word"
        elif content_type in (
            "application/vnd.ms-excel",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        ):
            return "excel"
        elif content_type.startswith("video/"):
            return "video"
        elif content_type.startswith("audio/"):
            return "audio"
        elif content_type.startswith("text/"):
            return "text"
        else:
            return "other"
    return "unknown"


def validate_user_email(email):
    from users.repository import UserRepository

    if email is None:
        return None
    if UserRepository.filter(email=email).exists():
        raise ValidationError("Такой email уже существует")
    return email


def t(value: str) -> str:
    return gettext_lazy(value)


def get_client_ip(request):
    forwarded_for = request.META.get("HTTP_X_FORWARDED_FOR")
    if forwarded_for:
        ip = forwarded_for.split(",")[0]
    else:
        ip = request.META.get("REMOTE_ADDR")
    return ip


def is_ip_allowed(ip: str, ip_list: list[str]) -> bool:
    for allowed_prefix in ip_list:
        if ip.startswith(allowed_prefix):
            return True
    return False


def userFromContext(context: dict):
    return context.get("request").user


def get_content_type_for_model(model, for_concrete_model=True) -> ContentType:
    return ContentType.objects.get_for_model(model, for_concrete_model)


def jwt_encode(user, is_refresh=False):
    delta = timedelta(days=SESSION_EXPIRE_DAYS) if is_refresh else timedelta(minutes=SESSION_EXPIRE_MINUTES)

    dt = datetime.now() + delta

    token = jwt.encode(
        payload={"user_id": user.id, "exp": dt.timestamp(), "iat": datetime.now().timestamp()},
        key=SECRET_KEY,
        algorithm=HASH_ALGORITHM,
    )

    return token, dt


def jwt_decode(token) -> dict | None:
    try:
        return jwt.decode(jwt=token, key=SECRET_KEY, algorithms=[HASH_ALGORITHM])
    except (jwt.ExpiredSignatureError, jwt.DecodeError, jwt.InvalidTokenError) as e:
        return None


def jwt_is_valid(token) -> bool:
    return jwt_decode(token) is not None
