from dataclasses import dataclass

from packages.abstractions import Command


@dataclass(frozen=True)
class CreateDepartmentCommand(Command):
    name: str
