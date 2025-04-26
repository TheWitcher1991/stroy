from packages.framework import AbstractUserModel
from users.infrastructure.managers import UserManager


class User(AbstractUserModel):
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["phone"]

    objects = UserManager()
