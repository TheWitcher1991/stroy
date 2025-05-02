from dataclasses import dataclass

from packages.kernel import Error


@dataclass(kw_only=True)
class ErrorList:
    def __init__(self, errors: list[Error]):
        self.errors = errors

    def add(self, error: Error):
        self.errors.append(error)

    def list(self) -> list[Error]:
        return self.errors

    def is_empty(self) -> bool:
        return len(self.errors) == 0

    def __len__(self) -> int:
        return len(self.errors)
