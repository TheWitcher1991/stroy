from django.urls import path
from rest_framework import routers

from . import views

app_name = "departments"

urlpatterns = [
    path("departments/indicators/", views.DepartmentIndicatorController.as_view(), name="department-indicators"),
]
