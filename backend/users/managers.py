from django.contrib.auth.base_user import BaseUserManager
from django.contrib.auth.hashers import make_password

from packages.utils import t


class UserManager(BaseUserManager):
    use_in_migrations = True

    def _create_user(self, email, password, **extra_fields):
        if not email:
            raise ValueError(t("The given email must be set"))
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        if email:
            user.username = email
        user.password = make_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, email, password=None, **extra_fields):
        extra_fields.setdefault("is_staff", False)
        extra_fields.setdefault("is_superuser", False)
        return self._create_user(email, password, **extra_fields)

    def create_superuser(self, email, password, **extra_fields):
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)

        if extra_fields.get("is_staff") is not True:
            raise ValueError(t("Superuser must have is_staff=True."))
        if extra_fields.get("is_superuser") is not True:
            raise ValueError(t("Superuser must have is_superuser=True."))

        return self._create_user(email, password, **extra_fields)
