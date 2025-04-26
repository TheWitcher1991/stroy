from abc import ABC
from dataclasses import dataclass
from typing import Any


@dataclass(kw_only=True)
class Entity(ABC):
    id: int | None = None

    def __eq__(self, other: Any) -> bool:
        if isinstance(other, type(self)):
            return self.id == other.id
        return False

    def __hash__(self):
        return hash(self.id)
