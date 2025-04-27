from django.db import models

from departments.infrastructure.models import Department
from packages.framework import AbstractUserModel
from users.infrastructure.managers import UserManager


class User(AbstractUserModel):
    department = models.ForeignKey(Department, on_delete=models.CASCADE, related_name="users")

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["phone"]

    objects = UserManager()
