from django.db import models

from config.settings import CHAR_MAX_LENGTH
from packages.framework import AbstractModel


class Guard(AbstractModel):
    name = models.CharField(max_length=CHAR_MAX_LENGTH)

    def __str__(self):
        return self.name


class GuardOperation(AbstractModel):
    operation = models.CharField(max_length=64)
    guard = models.ForeignKey(Guard, on_delete=models.CASCADE, related_name="operations")

    def __str__(self):
        return f"{self.guard.name} -> {self.operation}"
