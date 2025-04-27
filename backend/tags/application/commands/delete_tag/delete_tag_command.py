from dataclasses import dataclass

from packages.abstractions import Command


@dataclass(frozen=True)
class DeleteTagCommand(Command):
    tag_id: int
