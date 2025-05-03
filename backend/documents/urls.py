from django.urls import path
from rest_framework import routers

from . import views

app_name = "documents"

router = routers.SimpleRouter()

router.register(r"documents", views.DocumentViewSet, basename="documents")

urlpatterns = []

urlpatterns += router.urls
