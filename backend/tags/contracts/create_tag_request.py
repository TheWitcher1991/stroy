from dataclasses import dataclass

from packages.abstractions.request import AbstractRequest


@dataclass
class CreateTagRequest(AbstractRequest):
    name: str
    department: int
