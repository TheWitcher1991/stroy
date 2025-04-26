from packages.services import Repository
from users.domain.user import UserEntity
from users.infrastructure.mapper import UserMapper
from users.infrastructure.models import User


class UserRepository(Repository[UserEntity]):
    def __init__(self, model: type[User] = User, mapper: UserMapper = UserMapper()):
        super().__init__(model, mapper)
