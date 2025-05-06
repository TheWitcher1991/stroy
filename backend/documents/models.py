from django.db import models

from config.settings import CHAR_MAX_LENGTH, CHAR_MD_LENGTH
from documents.types import DocumentStatus
from packages.abstract import AbstractModel
from packages.utils import t


class Document(AbstractModel):
    title = models.CharField(t("Заголовок"), max_length=CHAR_MAX_LENGTH)
    file = models.FileField(t("Файл"), upload_to="documents/")
    doc_number = models.CharField(t("Номер документа"), max_length=CHAR_MAX_LENGTH)
    doc_type = models.CharField(t("Тип документа"), max_length=CHAR_MAX_LENGTH)
    content_type = models.CharField(t("Тип контента"), null=True, max_length=CHAR_MAX_LENGTH)
    version_number = models.PositiveIntegerField(t("Версия документа"), default=1)
    size = models.CharField(t("Размер файла"), max_length=CHAR_MAX_LENGTH)
    status = models.CharField(
        t("Cтатус"), choices=DocumentStatus, default=DocumentStatus.DRAFT, max_length=CHAR_MD_LENGTH
    )
    project = models.ForeignKey("projects.Project", on_delete=models.CASCADE, related_name="documents")
    author = models.ForeignKey("users.User", on_delete=models.CASCADE, related_name="documents")
    tag = models.ForeignKey("tags.Tag", on_delete=models.SET_NULL, null=True, related_name="documents")

    class Meta:
        verbose_name = t("Документ")
        verbose_name_plural = t("Документы")
        indexes = [
            models.Index(fields=["title"]),
            models.Index(fields=["size"]),
            models.Index(fields=["status"]),
            models.Index(fields=["project"]),
            models.Index(fields=["tag"]),
            models.Index(fields=["created_at"]),
        ]

    def __str__(self):
        return self.title


class DocumentVersion(AbstractModel):
    version_number = models.PositiveIntegerField(t("Версия документа"))
    file = models.FileField(t("Файл"), upload_to="documents/")
    modified_by = models.ForeignKey("users.User", on_delete=models.CASCADE, related_name="document_versions")
    document = models.ForeignKey("documents.Document", on_delete=models.CASCADE, related_name="versions")

    class Meta:
        verbose_name = t("Версия документа")
        verbose_name_plural = t("Версии документов")
        indexes = [
            models.Index(fields=["version_number"]),
        ]

    def __str__(self):
        return f"Version {self.version_number}"


class DocumentPermission(AbstractModel):
    user = models.ForeignKey("users.User", on_delete=models.CASCADE, related_name="document_permissions")
    document = models.ForeignKey("documents.Document", on_delete=models.CASCADE, related_name="permissions")
    guard = models.ForeignKey("guards.Guard", on_delete=models.CASCADE, related_name="document_permissions")

    class Meta:
        unique_together = ["user", "document"]
        verbose_name = t("Права на документ")
        verbose_name_plural = t("Права на документы")
        indexes = [
            models.Index(fields=["user"]),
            models.Index(fields=["document"]),
        ]

    def __str__(self):
        return f"{self.user} -> {self.document}"
