from guards.domain.entities.guard_operation import GuardOperationEntity
from guards.infrastructure.mappers.guard_operation_mapper import GuardOperationMapper
from guards.infrastructure.models import GuardOperation
from packages.services import Repository


class GuardOperationRepository(Repository[GuardOperation, GuardOperationEntity, GuardOperationMapper]):
    model = GuardOperation
    mapper = GuardOperationMapper()
