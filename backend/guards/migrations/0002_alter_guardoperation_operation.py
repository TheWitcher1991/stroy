# Generated by Django 5.2 on 2025-05-09 21:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("guards", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="guardoperation",
            name="operation",
            field=models.CharField(
                choices=[
                    ("CREATE", "Создание"),
                    ("READ", "Чтение"),
                    ("UPDATE", "Обновление"),
                    ("DELETE", "Удаление"),
                    ("RESTORE", "Восстановление"),
                    ("APPROVE", "Подтверждение"),
                    ("ARCHIVE", "Архивирование"),
                ],
                max_length=255,
                verbose_name="Операция",
            ),
        ),
    ]
