from guards.domain.entities.guard import GuardEntity
from guards.infrastructure.models import Guard
from packages.abstractions import AbstractMapper


class GuardMapper(AbstractMapper[Guard, GuardEntity]):

    def to_domain(self, instance: Guard) -> GuardEntity:
        return GuardEntity(id=instance.id, name=instance.name)

    def from_domain(self, instance: GuardEntity) -> Guard:
        return Guard(id=instance.id, name=instance.name)
