from corsheaders.defaults import default_headers

from config.os import env

CORS_ALLOW_ALL_ORIGINS = False
CORS_ALLOW_CREDENTIALS = True
CORS_ORIGIN_ALLOW_ALL = False
CORS_ORIGIN_WHITELIST = env("ALLOWED_HOSTS").split(" ")
CSRF_TRUSTED_ORIGINS = env("ALLOWED_HOSTS").split(" ")
CORS_EXPOSE_HEADERS = ["Content-Type", "X-CSRFToken"]
CORS_ALLOW_METHODS = ["DELETE", "GET", "OPTIONS", "PATCH", "POST", "PUT"]
CORS_ALLOW_HEADERS = default_headers + ("Content-Disposition", )
