from typing import Generic, TypeVar

from packages.kernel import ErrorList

T = TypeVar("T")


class ValidationResult(Generic[T]):
    def __init__(self, errors: ErrorList):
        self.errors = errors

    @property
    def is_valid(self) -> bool:
        return len(self.errors) == 0

    def to_list(self) -> ErrorList:
        return self.errors
