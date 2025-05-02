from django.db import models


class ProjectStatus(models.TextChoices):
    ACTIVE = ("ACTIVE", "Активный")
    FINISHED = ("FINISHED", "Завершен")
