from config.settings import CHAR_MAX_LENGTH
from packages.abstractions import ValueObject
from packages.kernel import Errors


class Title(ValueObject):
    value: str
    max_length = CHAR_MAX_LENGTH

    def __init__(self, value: str):
        self.value = value

    @staticmethod
    def create(value: str):
        if len(value) > CHAR_MAX_LENGTH:
            return Errors.value_is_invalid()

        return Title(value)
