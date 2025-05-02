from django.contrib.auth.models import AbstractUser, UserManager
from django.db import models


class User(AbstractUser):
    guard = models.OneToOneField("guards.Guard", on_delete=models.CASCADE, related_name="guard")
    department = models.OneToOneField("departments.Department", on_delete=models.CASCADE, related_name="users")

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["email"]

    objects = UserManager()
