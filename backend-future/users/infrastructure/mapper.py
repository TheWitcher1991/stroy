from departments.infrastructure.mapper import DepartmentMapper
from guards.infrastructure.mappers.guard_mapper import GuardMapper
from packages.abstractions import AbstractMapper
from users.domain.user import UserEntity
from users.infrastructure.models import User


class UserMapper(AbstractMapper[User, UserEntity]):

    def __init__(
        self, guard_mapper: GuardMapper = GuardMapper(), department_mapper: DepartmentMapper = DepartmentMapper()
    ):
        self.guard_mapper = guard_mapper
        self.department_mapper = department_mapper

    def to_domain(self, instance: User) -> UserEntity:
        return UserEntity(
            id=instance.id,
            first_name=instance.first_name,
            last_name=instance.last_name,
            email=instance.email,
            password=instance.password,
            department=self.department_mapper.to_domain(instance.department),
            guard=self.guard_mapper.to_domain(instance.guard),
            date_joined=instance.date_joined,
        )

    def from_domain(self, instance: UserEntity) -> User:
        return User(
            id=instance.id,
            first_name=instance.first_name,
            last_name=instance.last_name,
            email=instance.email,
            password=instance.password,
            department=self.department_mapper.from_domain(instance.department),
            guard=self.guard_mapper.from_domain(instance.guard),
            date_joined=instance.date_joined,
        )
