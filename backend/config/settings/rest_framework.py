REST_FRAMEWORK = {
    "DEFAULT_RENDERER_CLASSES": [
        "rest_framework.renderers.JSONRenderer",
    ],
    "DEFAULT_PARSER_CLASSES": [
        "rest_framework.parsers.JSONParser",
        "rest_framework.parsers.MultiPartParser",
    ],
    "DEFAULT_AUTHENTICATION_CLASSES": [],
    "DEFAULT_FILTER_BACKENDS": [
        "django_filters.rest_framework.DjangoFilterBackend",
        "rest_framework.filters.SearchFilter",
        "rest_framework.filters.OrderingFilter",
    ],
    "DEFAULT_THROTTLE_CLASSES": [
        "packages.framework.BurstRateThrottle",
    ],
    "DEFAULT_THROTTLE_RATES": {
        "burst": "20/second",
    },
    "DEFAULT_SCHEMA_CLASS": "drf_spectacular.openapi.AutoSchema",
    "DEFAULT_PAGINATION_CLASS": "packages.framework.StandardPageNumberPagination",
    "DEFAULT_METADATA_CLASS": "rest_framework.metadata.SimpleMetadata",
}

SPECTACULAR_SETTINGS = {
    "TITLE": "Stroy Swagger API",
    "DESCRIPTION": "Stroy Swagger API description",
    "VERSION": "1.0.0",
    "SERVE_INCLUDE_SCHEMA": False,
}
