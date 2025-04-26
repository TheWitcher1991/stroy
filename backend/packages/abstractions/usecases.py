from abc import ABC, abstractmethod
from typing import Generic, TypeVar

Input = TypeVar("Input")
Output = TypeVar("Output")


class UseCase(ABC, Generic[Input, Output]):
    @abstractmethod
    def execute(self, input_data: Input) -> Output:
        ...
