from enum import Enum


class ErrorType(Enum):
    Null = "null"
    Validation = "validation"
    NotFound = "not_found"
    Forbidden = "forbidden"
    Internal = "internal"
    Unauthorized = "unauthorized"
    Failure = "failure"
    Conflict = "conflict"
