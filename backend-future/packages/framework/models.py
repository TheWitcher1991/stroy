from django.contrib.auth.models import AbstractUser, UserManager
from django.db import models


class AbstractModel(models.Model):
    id = models.BigAutoField(primary_key=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = models.Manager()

    class Meta:
        abstract = True


class AbstractUserModel(AbstractUser):
    id = models.BigAutoField(primary_key=True)
    objects = UserManager()

    class Meta:
        abstract = True
