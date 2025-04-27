from dataclasses import dataclass

from packages.abstractions import Command


@dataclass(frozen=True)
class UpdateTagCommand(Command):
    tag_id: int
    name: str
