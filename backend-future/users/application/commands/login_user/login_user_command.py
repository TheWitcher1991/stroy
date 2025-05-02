from dataclasses import dataclass

from packages.abstractions import Command


@dataclass(frozen=True)
class LoginUserCommand(Command):
    email: str
    password: str
