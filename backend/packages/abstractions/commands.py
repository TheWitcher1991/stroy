from abc import ABC, abstractmethod

from packages.kernel import Result


class Command(ABC):
    pass


class CommandHandler(ABC):
    @abstractmethod
    def handle(self, command: Command) -> Result:
        pass
