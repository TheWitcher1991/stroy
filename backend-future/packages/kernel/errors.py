from dataclasses import dataclass

from packages.kernel import Error


@dataclass(kw_only=True)
class Errors:

    @staticmethod
    def internal(error="unknown error"):
        return Error.internal("internal.error", error)

    @staticmethod
    def failure(error="unknown error"):
        return Error.failure("failure.error", error)

    @staticmethod
    def value_is_invalid(value=None):
        label = value or "value"
        return Error.validation("invalid.input", f"{label} is invalid.")

    @staticmethod
    def value_is_required(value=None):
        label = value or "value"
        return Error.validation("required.input", f"{label} is required.")

    @staticmethod
    def invalid_credentials():
        return Error.validation("credentials.is.invalid", "Your credentials is invalid")

    @staticmethod
    def not_found(id: int = None):
        forId = "" if id is None else f"for Id: ${id}"
        return Error.not_found("record.not.found", f"not_found {forId}")

    @staticmethod
    def null(field: str = None):
        label = field or "value"
        return Error.null("field.null", f"{label} is null")

    @staticmethod
    def already_exist():
        return Error.validation("record.already.exist", "already_exist")
