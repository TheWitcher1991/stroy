from django.db import models

from config.settings import CHAR_MAX_LENGTH, CHAR_MD_LENGTH
from packages.abstract import AbstractModel
from projects.types import ProjectStatus


class Project(AbstractModel):
    title = models.CharField(max_length=CHAR_MAX_LENGTH)
    code = models.CharField(max_length=CHAR_MD_LENGTH)
    tag = models.CharField(max_length=CHAR_MD_LENGTH)
    status = models.CharField(choices=ProjectStatus, default=ProjectStatus.ACTIVE, max_length=CHAR_MD_LENGTH)
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()
    department = models.ForeignKey("departments.Department", on_delete=models.CASCADE, related_name="tags")

    def __str__(self):
        return self.title
