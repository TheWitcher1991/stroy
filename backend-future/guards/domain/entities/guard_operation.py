from dataclasses import dataclass

from guards.domain.entities.guard import GuardEntity
from packages.abstractions import Entity, OperationType


@dataclass(eq=False)
class GuardOperationEntity(Entity):
    operation: OperationType
    guard: GuardEntity

    @staticmethod
    def new(operation: OperationType, guard: GuardEntity) -> "GuardOperationEntity":
        return GuardOperationEntity(operation=operation, guard=guard)
