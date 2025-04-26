from django.db import models

from config.settings import CHAR_MAX_LENGTH
from packages.framework import AbstractModel


class Tag(AbstractModel):
    name = models.CharField(max_length=CHAR_MAX_LENGTH)

    def __str__(self):
        return self.name
