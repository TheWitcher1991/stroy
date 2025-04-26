from dataclasses import dataclass

from packages.abstractions import ErrorType

ERROR_SEPARATOR = ":"


@dataclass(kw_only=True)
class Error:
    code: str
    message: str
    type: str

    def __init__(self, **kwargs):
        super().__init__(**kwargs)

    def __eq__(self, other):
        if isinstance(other, Error):
            return self.code == other.code and self.message == other.message and self.type == other.type
        return False

    def __hash__(self):
        return hash((self.code, self.message, self.type))

    def serialize(self) -> str:
        return ERROR_SEPARATOR.join([self.code, self.message, self.type])

    def to_list(self) -> list:
        return [Error(code=self.code, message=self.message, type=self.type)]

    @staticmethod
    def deserialize(serialized: str) -> "Error":
        parts = serialized.split(ERROR_SEPARATOR)

        if len(parts) != 3:
            raise ValueError("Invalid serialized format")

        return Error(code=parts[0], message=parts[1], type=parts[2])

    @staticmethod
    def validation(code: str, message: str) -> "Error":
        return Error(code=code, message=message, type=ErrorType.Validation)

    @staticmethod
    def not_found(code: str, message: str) -> "Error":
        return Error(code=code, message=message, type=ErrorType.NotFound)

    @staticmethod
    def null(code: str, message: str) -> "Error":
        return Error(code=code, message=message, type=ErrorType.Null)

    @staticmethod
    def forbidden(code: str, message: str) -> "Error":
        return Error(code=code, message=message, type=ErrorType.Forbidden)

    @staticmethod
    def internal(code: str, message: str) -> "Error":
        return Error(code=code, message=message, type=ErrorType.Internal)

    @staticmethod
    def unauthorized(code: str, message: str) -> "Error":
        return Error(code=code, message=message, type=ErrorType.Unauthorized)

    @staticmethod
    def failure(code: str, message: str) -> "Error":
        return Error(code=code, message=message, type=ErrorType.Failure)

    @staticmethod
    def conflict(code: str, message: str) -> "Error":
        return Error(code=code, message=message, type=ErrorType.Conflict)
