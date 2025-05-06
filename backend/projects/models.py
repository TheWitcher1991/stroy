from django.db import models

from config.settings import CHAR_MAX_LENGTH, CHAR_MD_LENGTH
from packages.abstract import AbstractModel
from packages.utils import t
from projects.types import ProjectStatus


class Project(AbstractModel):
    title = models.CharField(t("Заголовок"), max_length=CHAR_MAX_LENGTH)
    code = models.CharField(t("Код"), max_length=CHAR_MD_LENGTH)
    tag = models.CharField(t("Тег"), max_length=CHAR_MD_LENGTH)
    status = models.CharField(
        t("Статус"), choices=ProjectStatus, default=ProjectStatus.ACTIVE, max_length=CHAR_MD_LENGTH
    )
    start_date = models.DateField(t("Дата начала"))
    end_date = models.DateField(t("Дата окончания"))
    department = models.ForeignKey("departments.Department", on_delete=models.CASCADE, related_name="projects")

    class Meta:
        verbose_name = t("Проект")
        verbose_name_plural = t("Проекты")
        indexes = [models.Index(fields=["title"]), models.Index(fields=["status"]), models.Index(fields=["department"])]

    def __str__(self):
        return f"{self.title} {self.code}"
