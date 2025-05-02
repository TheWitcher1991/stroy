from django.db import models

from config.settings import CHAR_MAX_LENGTH
from guards.types import OperationType
from packages.abstract import AbstractModel


class Guard(AbstractModel):
    name = models.CharField(max_length=CHAR_MAX_LENGTH)
    department = models.ForeignKey("departments.Department", on_delete=models.CASCADE, related_name="guards")

    def __str__(self):
        return self.name


class GuardOperation(AbstractModel):
    operation = models.CharField(choices=OperationType, max_length=CHAR_MAX_LENGTH)
    guard = models.ForeignKey(Guard, on_delete=models.CASCADE, related_name="operations")

    def __str__(self):
        return f"{self.guard.name} -> {self.operation}"
