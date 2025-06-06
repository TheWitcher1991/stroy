from django.db import models

from config.settings import CHAR_MAX_LENGTH, CHAR_MD_LENGTH
from departments.models import AbstractModel
from packages.utils import t


class Tag(AbstractModel):
    title = models.CharField(t("Название"), max_length=CHAR_MAX_LENGTH)
    color = models.CharField(t("Цвет"), max_length=CHAR_MD_LENGTH, default="#d8ff75")
    summary = models.TextField(t("Описание"), blank=True, null=True)
    department = models.ForeignKey("departments.Department", on_delete=models.CASCADE, related_name="tags")

    class Meta:
        verbose_name = t("Тег")
        verbose_name_plural = t("Теги")
        indexes = [models.Index(fields=["title"]), models.Index(fields=["department"])]

    def __str__(self):
        return f"{self.title}"
