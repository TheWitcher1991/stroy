from dataclasses import dataclass

from packages.abstractions import Entity


@dataclass(eq=False)
class GuardEntity(Entity):
    name: str

    @staticmethod
    def new(name: str) -> "GuardEntity":
        return GuardEntity(name=name)

