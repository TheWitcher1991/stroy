from django.db import models

from config.settings import CHAR_MAX_LENGTH
from packages.abstract import AbstractModel
from packages.utils import t


class Department(AbstractModel):
    name = models.CharField(t("Название"), max_length=CHAR_MAX_LENGTH)

    class Meta:
        verbose_name = t("Отдел")
        verbose_name_plural = t("Отделы")
        indexes = [
            models.Index(fields=["name"]),
        ]

    def __str__(self):
        return self.name
