from guards.domain.entities.guard import GuardEntity
from guards.infrastructure.mappers.guard_mapper import GuardMapper
from guards.infrastructure.models import Guard
from packages.services import Repository


class GuardRepository(Repository[Guard, GuardEntity, GuardMapper]):
    model = Guard
    mapper = GuardMapper()
