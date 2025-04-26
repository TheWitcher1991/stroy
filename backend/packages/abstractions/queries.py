from abc import ABC, abstractmethod
from typing import Any


class Query(ABC):
    pass


class QueryHandler(ABC):
    @abstractmethod
    def handle(self, query: Query) -> Any:
        pass
