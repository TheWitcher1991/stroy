from packages.abstractions import AbstractMapper
from users.domain.user import UserEntity
from users.infrastructure.models import User


class UserMapper(AbstractMapper[User, UserEntity]):

    def to_domain(self, instance: User) -> UserEntity:
        pass

    def from_domain(self, instance: UserEntity) -> User:
        pass
