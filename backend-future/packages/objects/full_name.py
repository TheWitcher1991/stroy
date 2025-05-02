from packages.abstractions import ValueObject


class FullName(ValueObject):
    first_name: str
    last_name: str
    patronymic: str

    def __init__(self, first_name: str, last_name: str, patronymic: str):
        self.first_name = first_name
        self.last_name = last_name
        self.patronymic = patronymic

    @staticmethod
    def create(first_name: str, last_name: str, patronymic: str) -> "FullName":
        return FullName(first_name, last_name, patronymic)

    def to_string(self) -> str:
        return f"{self.last_name} {self.first_name} {self.patronymic}"
