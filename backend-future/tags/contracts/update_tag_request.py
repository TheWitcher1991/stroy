from dataclasses import dataclass

from packages.abstractions.request import AbstractRequest


@dataclass
class UpdateTagRequest(AbstractRequest):
    name: str
