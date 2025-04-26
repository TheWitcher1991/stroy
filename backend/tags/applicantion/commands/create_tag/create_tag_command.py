from dataclasses import dataclass

from packages.abstractions import Command


@dataclass(frozen=True)
class CreateTagCommand(Command):
    name: str
