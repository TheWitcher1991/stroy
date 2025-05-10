import os
from pathlib import Path

from django.urls import reverse_lazy

from config.os import env

BASE_DIR = Path(__file__).resolve().parent.parent.parent

SECRET_KEY = env("DJANGO_SECRET_KEY", default="uid-compose-hey-hey-secret-key")

ROOT_URLCONF = "config.urls"
WSGI_APPLICATION = "config.wsgi.application"
ASGI_APPLICATION = "config.asgi.application"

ALLOWED_HOSTS = env("ALLOWED_DOMAINS").split(" ")
INTERNAL_IPS = env("INTERNAL_IPS").split(" ")

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]

LOGIN_URL = "admin:login"

LOGIN_REDIRECT_URL = reverse_lazy("admin:index")

LANGUAGE_CODE = "ru-ru"
TIME_ZONE = "Europe/Moscow"
USE_I18N = True
USE_TZ = False

DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"

AUTH_USER_MODEL = "users.User"

LANGUAGES = [
    ("en", "English"),
    ("ru", "Русский"),
]

ADMIN_URL = env("ADMIN_URL", default="admin/")

DOMAIN_NAME = env("BACKEND_DOMAIN")
DOMAIN_SITE = "https://" + DOMAIN_NAME
# CSP_ALLOWED_DOMAINS = env('ALLOWED_DOMAINS').split(' ')

DJANGO_SUPERUSER_USERNAME = env("DJANGO_SUPERUSER_USERNAME", default="admin")
DJANGO_SUPERUSER_EMAIL = env("DJANGO_SUPERUSER_EMAIL", default="admin@stroy.ru")
DJANGO_SUPERUSER_PHONE = env("DJANGO_SUPERUSER_PHONE", default="+79999999999")
DJANGO_SUPERUSER_PASSWORD = env("DJANGO_SUPERUSER_PASSWORD", default="admin")

AUTH_TOKEN_TYPE = "Bearer"

ACCESS_TOKEN_NAME = "access_token"

REFRESH_TOKEN_NAME = "refresh_token"

CHAR_MAX_LENGTH = 255
CHAR_MD_LENGTH = 64
CHAR_SM_LENGTH = 32
TEXT_MAX_LENGTH = 3000

STROY_PLUS_AMOUNT = 399.00

SESSION_TIMEOUT = 3600
SESSION_EXPIRE_MINUTES = 60
SESSION_EXPIRE_HOURS = 3
SESSION_EXPIRE_DAYS = 7
SESSION_EXPIRE_TIMEOUT = SESSION_EXPIRE_DAYS * 24 * 60 * 60

DATA_UPLOAD_MAX_MEMORY_SIZE = 2000 * 1024 * 1024

ADMIN_METHODS = ["POST", "PUT", "PATCH", "DELETE"]

ADMIN_ACTIONS = ["create", "update", "partial_update", "destroy"]

ALLOW_METHODS = ["GET", "HEAD", "OPTIONS"]

WRITE_METHODS = ["POST", "PUT", "PATCH"]

ALLOW_ACTIONS = ["list", "retrieve"]

MEDIA_URL = "/mediafiles/"

MEDIA_ROOT = os.path.join(BASE_DIR, "mediafiles")

STATIC_URL = "/staticfiles/"

STATIC_ROOT = os.path.join(BASE_DIR, "staticfiles")

STATICFILES_DIRS = (os.path.join(BASE_DIR, "static"),)
