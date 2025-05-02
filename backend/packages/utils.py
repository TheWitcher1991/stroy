from datetime import datetime, timedelta

import jwt
from django.contrib.contenttypes.models import ContentType
from django.utils.translation import gettext_lazy
from rest_framework.exceptions import ValidationError

from config.settings import HASH_ALGORITHM, SECRET_KEY, SESSION_EXPIRE_DAYS, SESSION_EXPIRE_MINUTES
from users.repository import UserRepository


def validate_user_email(email):
    if email is None:
        return None
    if UserRepository.filter(email=email).exists():
        raise ValidationError("Такой email уже существует")
    return email


def t(value: str) -> str:
    return gettext_lazy(value)


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
