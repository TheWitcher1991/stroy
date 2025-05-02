from django.db import models

from config.settings import CHAR_MAX_LENGTH
from departments.models import AbstractModel


class Tag(AbstractModel):
    title = models.CharField(max_length=CHAR_MAX_LENGTH)
    summary = models.TextField(blank=True, null=True)
    department = models.ForeignKey("departments.Department", on_delete=models.CASCADE, related_name="tags")

    def __str__(self):
        return self.title
