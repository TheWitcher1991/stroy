from django.contrib.auth.models import AbstractUser
from django.db import models

from config.settings import CHAR_MD_LENGTH
from packages.utils import t
from users.managers import UserManager
from users.types import UserRole


class User(AbstractUser):
    email = models.EmailField(t("Email"), max_length=255, unique=True)
    avatar = models.ImageField(t("Аватар"), upload_to="users/", null=True, blank=True)
    role = models.CharField(t("role"), choices=UserRole, default=UserRole.OFFICER, max_length=CHAR_MD_LENGTH)
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
