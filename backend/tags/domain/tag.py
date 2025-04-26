from dataclasses import dataclass

from packages.abstractions import Entity


@dataclass(eq=False)
class TagEntity(Entity):
    name: str

    @staticmethod
    def new(name: str) -> 'TagEntity':
        return TagEntity(name=name)

