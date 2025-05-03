from django.db import models


class DocumentStatus(models.TextChoices):
    DRAFT = ("DRAFT", "Черновик")
    HARMONIZATION = ("HARMONIZATION", "На утверждение")
    APPROVED = ("APPROVED", "Одобрено")
