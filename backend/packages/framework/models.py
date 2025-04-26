from django.contrib.auth.models import AbstractUser, UserManager
from django.db import models


class AbstractModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class AbstractUserModel(AbstractUser):
    objects = UserManager()

    class Meta:
        abstract = True
