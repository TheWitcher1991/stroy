from dataclasses import dataclass

from packages.abstractions.request import AbstractRequest


@dataclass
class SignupUserRequest(AbstractRequest):
    first_name: str
    last_name: str
    email: str
    password: str
    department_name: int
