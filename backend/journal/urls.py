from django.urls import path
from rest_framework import routers

from . import views

app_name = "journal"

router = routers.SimpleRouter()

router.register(r"journal", views.JournalViewSet, basename="journal")

urlpatterns = []

urlpatterns += router.urls
