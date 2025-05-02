from dataclasses import dataclass

from packages.abstractions import Command


@dataclass(frozen=True)
class SignupUserCommand(Command):
    first_name: str
    last_name: str
    email: str
    password: str
    department_name: str
