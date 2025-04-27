from typing import Any

from packages.kernel import ErrorList


class Result:
    def __init__(self, is_success: bool, value: Any = None, errors: ErrorList = None):
        self.is_success = is_success
        self.value = value
        self.errors = errors.list()

    @property
    def is_failure(self):
        return not self.is_success

    def to_response(self):
        return {"errors": self.errors} if self.errors else {"value": self.value}

    @staticmethod
    def success(value: Any = None):
        return Result(is_success=True, value=value)

    @staticmethod
    def failure(errors: ErrorList):
        return Result(is_success=False, errors=errors)
