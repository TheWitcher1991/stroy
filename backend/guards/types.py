from django.db import models


class OperationType(models.TextChoices):
    CREATE = ("CREATE", "Создание")
    READ = ("READ", "Чтение")
    UPDATE = ("UPDATE", "Обновление")
    DELETE = ("DELETE", "Удаление")
    RESTORE = ("RESTORE", "Восстановление")
    APPROVE = ("APPROVE", "Подтверждение")
    ARCHIVE = ("ARCHIVE", "Архивирование")
