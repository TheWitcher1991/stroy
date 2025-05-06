from django.contrib.auth.models import AbstractUser
from django.db import models

from packages.utils import t
from users.managers import UserManager


class User(AbstractUser):
    email = models.EmailField(t("Email"), max_length=255, unique=True)
    guard = models.ForeignKey("guards.Guard", on_delete=models.SET_NULL, null=True, related_name="user")
    department = models.OneToOneField("departments.Department", on_delete=models.CASCADE, related_name="user")
    updated_at = models.DateTimeField(t("Дата обновления"), auto_now=True)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    objects = UserManager()

    class Meta:
        verbose_name = t("Пользователь")
        verbose_name_plural = t("Пользователи")

    def __str__(self):
        return f"{self.first_name} {self.last_name} -> {self.department}"
