from dataclasses import dataclass

from packages.abstractions.response import AbstractResponse
from users.domain.user import UserEntity


@dataclass
class LoginUserResponse(AbstractResponse):
    access_token: str
    refresh_token: str
    session_expires: int
    access_expires: int
    token_type: str
    user: UserEntity
