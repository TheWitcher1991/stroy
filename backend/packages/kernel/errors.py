from dataclasses import dataclass

from packages.kernel import Error


@dataclass(kw_only=True)
class Errors:

    @staticmethod
    def value_is_invalid(value=None):
        label = value or "value"
        return Error.validation("invalid.input", f"{label} is invalid.")

    @staticmethod
    def invalid_credentials():
        return Error.validation("credentials.is.invalid", "Your credentials is invalid")

    @staticmethod
    def not_found(id: int = None) -> Error:
        forId = "" if id is None else f"for Id: ${id}"
        return Error.not_found("record.not.found", f"not_found {forId}")

    @staticmethod
    def null(field: str = None) -> Error:
        label = field or "value"
        return Error.null("field.null", f"{label} is null")

    @staticmethod
    def already_exist() -> Error:
        return Error.validation("record.already.exist", "already_exist")
