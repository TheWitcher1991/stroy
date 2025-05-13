from config.os import DEBUG, PRODUCTION, env

HASH_ALGORITHM = env("HASH_ALGORITHM", default="HS256")

SECURE_HSTS_PRELOAD = PRODUCTION
SECURE_SSL_REDIRECT = PRODUCTION
SECURE_HSTS_INCLUDE_SUBDOMAINS = True
SECURE_HSTS_SECONDS = 0 if DEBUG else 31536000
SECURE_PROXY_SSL_HEADER = ("HTTP_X_FORWARDED_PROTO", "https")

X_FRAME_OPTIONS = 'SAMEORIGIN'
SECURE_BROWSER_XSS_FILTER = True
SECURE_CONTENT_TYPE_NOSNIFF = True
SECURE_REFERRER_POLICY = "same-origin"

SESSION_COOKIE_SECURE = True
SESSION_COOKIE_HTTPONLY = True
SESSION_COOKIE_SAMESITE = "Lax"

CSRF_COOKIE_AGE = 31449600
CSRF_COOKIE_SAMESITE = "Lax"
CSRF_COOKIE_NAME = "csrftoken"
CSRF_COOKIE_SECURE = not DEBUG
CSRF_COOKIE_HTTPONLY = not DEBUG
CSRF_HEADER_NAME = "X-CSRFToken"

PASSWORD_HASHERS = [
    "django.contrib.auth.hashers.PBKDF2PasswordHasher",
    "django.contrib.auth.hashers.PBKDF2SHA1PasswordHasher",
    "django.contrib.auth.hashers.Argon2PasswordHasher",
    "django.contrib.auth.hashers.BCryptSHA256PasswordHasher",
    "django.contrib.auth.hashers.ScryptPasswordHasher",
]

AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.MinimumLengthValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.CommonPasswordValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.NumericPasswordValidator",
    },
]
