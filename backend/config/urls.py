from django.contrib import admin
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.urls import include, path
from drf_spectacular.views import SpectacularAPIView, SpectacularRedocView, SpectacularSwaggerView

from config.settings import ADMIN_URL
from packages.utils import t

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
    path("v1/", include("authorization.urls", namespace="authorization")),
    path("v1/", include("departments.urls", namespace="departments")),
    path("v1/", include("documents.urls", namespace="documents")),
    path("v1/", include("guards.urls", namespace="guards")),
    path("v1/", include("journal.urls", namespace="journal")),
    path("v1/", include("projects.urls", namespace="projects")),
    path("v1/", include("tags.urls", namespace="tags")),
    path("v1/", include("users.urls", namespace="users")),
    path("v1/", include("business.urls", namespace="business")),
]

urlpatterns += staticfiles_urlpatterns()
