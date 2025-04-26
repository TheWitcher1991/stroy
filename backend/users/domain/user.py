from dataclasses import dataclass
from datetime import datetime

from django.utils import timezone

from packages.abstractions import Entity


@dataclass(eq=False)
class UserEntity(Entity):
    first_name: str
    last_name: str
    email: str
    department: int
    role: int
    date_joined: datetime
    password: str

    @staticmethod
    def new(first_name, last_name, email, department, role, password) -> "UserEntity":
        date_joined = timezone.now()
        return UserEntity(
            first_name=first_name,
            last_name=last_name,
            email=email,
            department=department,
            role=role,
            password=password,
            date_joined=date_joined,
        )
