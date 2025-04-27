from django.db import models

from config.settings import CHAR_MAX_LENGTH
from departments.infrastructure.models import Department
from packages.framework import AbstractModel


class Tag(AbstractModel):
    name = models.CharField(max_length=CHAR_MAX_LENGTH)
    department = models.ForeignKey(Department, on_delete=models.CASCADE, related_name="tags")

    def __str__(self):
        return self.name
