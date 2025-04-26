from abc import ABC, abstractmethod
from typing import Generic, TypeVar, Iterable

from django.db.models import Model

from packages.abstractions import Entity

ModelType = TypeVar("ModelType", bound=Model)
EntityType = TypeVar("EntityType", bound=Entity)


class AbstractMapper(ABC, Generic[ModelType, EntityType]):
    @abstractmethod
    def to_domain(self, instance: ModelType) -> EntityType:
        ...

    @abstractmethod
    def from_domain(self, entity: EntityType) -> ModelType:
        ...

    def to_domain_list(self, instances: Iterable[ModelType]) -> list[EntityType]:
        return [self.to_domain(instance) for instance in instances]

    def from_domain_list(self, entities: Iterable[EntityType]) -> list[ModelType]:
        return [self.from_domain(entity) for entity in entities]
