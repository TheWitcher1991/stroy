from dataclasses import dataclass

from packages.abstractions.request import AbstractRequest


@dataclass
class CreateDepartmentRequest(AbstractRequest):
    name: str
