from django.contrib.auth.models import AbstractUser, UserManager
from django.db import models

from packages.utils import t


class User(AbstractUser):
    guard = models.OneToOneField("guards.Guard", on_delete=models.SET_NULL, related_name="user")
    department = models.OneToOneField("departments.Department", on_delete=models.CASCADE, related_name="user")

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["email"]

    objects = UserManager()

    class Meta:
        verbose_name = t("Пользователь")
        verbose_name_plural = t("Пользователи")

    def __str__(self):
        return f"{self.first_name} {self.last_name} -> {self.department}"
