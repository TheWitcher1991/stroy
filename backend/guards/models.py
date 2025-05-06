from django.db import models

from config.settings import CHAR_MAX_LENGTH
from guards.types import OperationType
from packages.abstract import AbstractModel
from packages.utils import t


class Guard(AbstractModel):
    title = models.CharField(t("Название"), max_length=CHAR_MAX_LENGTH)
    department = models.ForeignKey("departments.Department", on_delete=models.CASCADE, related_name="guards")

    class Meta:
        verbose_name = t("Гуард")
        verbose_name_plural = t("Гуарды")
        indexes = [models.Index(fields=["title"]), models.Index(fields=["department"])]

    def __str__(self):
        return f"{self.title} -> {self.department}"


class GuardOperation(AbstractModel):
    operation = models.CharField(t("Операция"), choices=OperationType, max_length=CHAR_MAX_LENGTH)
    guard = models.ForeignKey(Guard, on_delete=models.CASCADE, related_name="operations")

    class Meta:
        verbose_name = t("Операция гуарда")
        verbose_name_plural = t("Операции гуарда")
        indexes = [models.Index(fields=["guard"]), models.Index(fields=["operation"])]

    def __str__(self):
        return f"{self.guard.name} -> {self.operation}"
