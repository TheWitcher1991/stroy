from abc import ABC, abstractmethod


class DTO(ABC):
    @classmethod
    @abstractmethod
    def from_dict(cls, data: dict) -> 'DTO':
        ...

    @abstractmethod
    def to_dict(self) -> dict:
        ...
