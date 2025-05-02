from django.urls import path
from rest_framework import routers

from . import views

app_name = "projects"

router = routers.SimpleRouter()

router.register(r"projects", views.ProjectViewSet, basename="projects")

urlpatterns = []

urlpatterns += router.urls
