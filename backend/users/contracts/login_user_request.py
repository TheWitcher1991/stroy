from dataclasses import dataclass

from packages.abstractions.request import AbstractRequest


@dataclass
class LoginUserRequest(AbstractRequest):
    email: str
    password: str
