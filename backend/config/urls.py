from django.contrib import admin
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.urls import include, path
from drf_spectacular.views import SpectacularAPIView, SpectacularRedocView, SpectacularSwaggerView

from config.settings import ADMIN_URL
from packages.kernel import t

app_name = "config"

admin.site.index_title = t("Stroy admin")

urlpatterns = [
    path(ADMIN_URL, admin.site.urls),
    path(f"{ADMIN_URL}doc/", include("django.contrib.admindocs.urls")),
    path("v1/schema/", SpectacularAPIView.as_view(), name="schema"),
    path(
        "v1/docs/",
        SpectacularSwaggerView.as_view(url_name="schema"),
        name="swagger-docs",
    ),
    path("v1/redoc/", SpectacularRedocView.as_view(url_name="schema"), name="redoc"),
    path("v1/", include("tags.presentation.router", namespace="tags")),
]

urlpatterns += staticfiles_urlpatterns()
