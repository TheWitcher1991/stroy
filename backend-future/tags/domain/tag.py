from dataclasses import dataclass

from departments.domain.department import DepartmentEntity
from packages.abstractions import Entity


@dataclass(eq=False)
class TagEntity(Entity):
    name: str
    department: DepartmentEntity

    @staticmethod
    def new(name: str, department: DepartmentEntity) -> "TagEntity":
        return TagEntity(name=name, department=department)
