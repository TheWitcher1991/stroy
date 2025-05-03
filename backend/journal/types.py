from django.db import models


class JournalAction(models.TextChoices):
    CREATE = ("CREATE", "Создан")
    UPDATE = ("UPDATE", "Обновлен")
    DELETE = ("DELETE", "Удален")
    RESTORE = ("RESTORE", "Восстановлен")
    APPROVE = ("APPROVE", "Одобрен")
