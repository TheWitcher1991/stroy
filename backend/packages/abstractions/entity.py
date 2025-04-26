from abc import ABC, abstractmethod
from typing import Any, TypeVar


class Entity(ABC):
    id: int | None = None

    def __init__(self, entity_id: int | None = None):
        self.id = entity_id or int

    def __eq__(self, other: Any) -> bool:
        if isinstance(other, type(self)):
            return self.id == other.id
        return False

    def __hash__(self):
        return hash(self.id)

    @abstractmethod
    def validate(self) -> None: ...

    @abstractmethod
    def to_dict(self) -> dict: ...

    @abstractmethod
    def create(self, data: dict) -> dict: ...
