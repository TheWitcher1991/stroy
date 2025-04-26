from abc import ABC, abstractmethod
from typing import TypeVar, Generic

from packages.abstractions import Entity, DTO

EntityType = TypeVar("EntityType", bound=Entity)
DTOType = TypeVar("DTOType", bound=DTO)


class AbstractDTOMapper(ABC, Generic[EntityType, DTOType]):
    @abstractmethod
    def to_dto(self, entity: EntityType) -> DTOType:
        ...

    @abstractmethod
    def from_dto(self, dto: DTOType) -> EntityType:
        ...
