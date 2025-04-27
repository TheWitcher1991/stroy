from abc import ABC, abstractmethod
from typing import Generic, Optional, TypeVar

from packages.abstractions import Entity

T = TypeVar("T", bound=Entity)


class AbstractRepository(ABC, Generic[T]):
    @abstractmethod
    def get(self, **kwargs) -> Optional[T]: ...

    @abstractmethod
    def get_by_id(self, id: int) -> Optional[T]: ...

    @abstractmethod
    def filter(self, **kwargs) -> list[T]: ...

    @abstractmethod
    def exclude(self, **kwargs) -> list[T]: ...

    @abstractmethod
    def list(self) -> list[T]: ...

    @abstractmethod
    def add(self, entity: T) -> T: ...

    @abstractmethod
    def save(self, instance: T) -> T: ...

    @abstractmethod
    def update(self, entity: T) -> T: ...

    @abstractmethod
    def delete(self, entity: T) -> None: ...
