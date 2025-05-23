from django.db import models


class DocumentStatus(models.TextChoices):
    DRAFT = ("DRAFT", "Черновик")
    ARCHIVE = ("ARCHIVE", "В архиве")
    HARMONIZATION = ("HARMONIZATION", "На утверждение")
    APPROVED = ("APPROVED", "Одобрено")
