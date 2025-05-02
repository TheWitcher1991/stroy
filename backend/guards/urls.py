from django.urls import path
from rest_framework import routers

from . import views

app_name = "guards"

router = routers.SimpleRouter()

router.register(r"guards", views.GuardViewSet, basename="guards")

urlpatterns = []

urlpatterns += router.urls
