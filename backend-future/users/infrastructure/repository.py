from packages.services import Repository
from users.domain.user import UserEntity
from users.infrastructure.mapper import UserMapper
from users.infrastructure.models import User


class UserRepository(Repository[User, UserEntity, UserMapper]):
    model = User
    mapper = UserMapper()
