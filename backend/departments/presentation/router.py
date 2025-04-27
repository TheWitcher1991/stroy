from django.urls import path

from departments.presentation.controllers import DepartmentController

app_name = "departments"

urlpatterns = [
    path("departments/", DepartmentController.as_view(), name="departments"),
]
