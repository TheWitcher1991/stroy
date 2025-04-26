from abc import ABC


class ValueObject(ABC):

    def to_string(self) -> str:
        raise NotImplemented

    def equals(self, other):
        if other is None:
            return False

        if type(self) != type(other):
            return False

        return self.__dict__ == other.__dict__
