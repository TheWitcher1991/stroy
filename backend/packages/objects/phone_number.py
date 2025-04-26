import re

from packages.abstractions import ValueObject
from packages.kernel import Errors


class PhoneNumber(ValueObject):
    value: str
    validation_regex = r"(^\+\d{1,3}\d{10}$|^$)"

    def __init__(self, value: str):
        self.value = value

    @staticmethod
    def create(value: str):
        if not re.match(PhoneNumber.validation_regex, value):
            return Errors.value_is_invalid(value)

        return PhoneNumber(value)
