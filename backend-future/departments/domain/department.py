from dataclasses import dataclass

from packages.abstractions import Entity


@dataclass(eq=False)
class DepartmentEntity(Entity):
    name: str

    @staticmethod
    def new(name: str) -> "DepartmentEntity":
        return DepartmentEntity(name=name)
