from django.db import models


class UserRole(models.TextChoices):
    ADMIN = "ADMIN", "Администратор"
    OFFICER = "OFFICER", "Сотрудник"
