from django.db import models

from config.settings import CHAR_MD_LENGTH
from journal.types import JournalAction
from packages.abstract import AbstractModel
from packages.utils import t


class Journal(AbstractModel):
    action = models.CharField(t("Действие"), choices=JournalAction, max_length=CHAR_MD_LENGTH)
    document = models.ForeignKey("documents.Document", on_delete=models.CASCADE, related_name="journals")
    user = models.ForeignKey("users.User", on_delete=models.CASCADE, related_name="journals")

    class Meta:
        verbose_name = t("Журнал")
        verbose_name_plural = t("Журналы")
        indexes = [models.Index(fields=["action"]), models.Index(fields=["document"]), models.Index(fields=["user"])]

    def __str__(self):
        return f"{self.action}: {self.document} - {self.user}"
