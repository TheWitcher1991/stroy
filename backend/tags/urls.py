from django.urls import path
from rest_framework import routers

from . import views

app_name = "tags"

router = routers.SimpleRouter()

router.register(r"tags", views.TagViewSet, basename="tags")

urlpatterns = []

urlpatterns += router.urls
