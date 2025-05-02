from abc import ABC, abstractmethod
from typing import Generic, TypeVar

from packages.abstractions import DTO, Entity

EntityType = TypeVar("EntityType", bound=Entity)
DTOType = TypeVar("DTOType", bound=DTO)


class AbstractDTOMapper(ABC, Generic[EntityType, DTOType]):
    @abstractmethod
    def to_dto(self, entity: EntityType) -> DTOType: ...

    @abstractmethod
    def from_dto(self, dto: DTOType) -> EntityType: ...
