from guards.domain.entities.guard_operation import GuardOperationEntity
from guards.infrastructure.mappers.guard_mapper import GuardMapper
from guards.infrastructure.models import GuardOperation
from packages.abstractions import AbstractMapper


class GuardOperationMapper(AbstractMapper[GuardOperation, GuardOperationEntity]):

    def __init__(self, guard_mapper: GuardMapper = GuardMapper()):
        self.guard_mapper = guard_mapper

    def to_domain(self, instance: GuardOperation) -> GuardOperationEntity:
        return GuardOperationEntity(
            id=instance.id, guard=self.guard_mapper.to_domain(instance.guard), operation=instance.operation
        )

    def from_domain(self, instance: GuardOperationEntity) -> GuardOperation:
        return GuardOperation(
            id=instance.id, guard=self.guard_mapper.from_domain(instance.guard), operation=instance.operation
        )
