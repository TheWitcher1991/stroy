from dataclasses import dataclass
from datetime import datetime

from django.utils import timezone

from departments.domain.department import DepartmentEntity
from guards.domain.entities.guard import GuardEntity
from packages.abstractions import Entity


@dataclass(eq=False)
class UserEntity(Entity):
    first_name: str
    last_name: str
    email: str
    department: DepartmentEntity
    guard: GuardEntity | None
    date_joined: datetime
    password: str

    @staticmethod
    def new(
        first_name: str,
        last_name: str,
        email: str,
        department: DepartmentEntity,
        password: str,
        guard: GuardEntity | None = None,
    ) -> "UserEntity":
        date_joined = timezone.now()
        return UserEntity(
            first_name=first_name,
            last_name=last_name,
            email=email,
            department=department,
            guard=guard,
            password=password,
            date_joined=date_joined,
        )

    def update_guard(self, guard: GuardEntity) -> None:
        self.guard = guard

    def update_email(self, email: str) -> None:
        self.email = email

    def update_password(self, password: str) -> None:
        self.password = password
