from packages.mixins import AbstractRepository
from tags.models import Tag


class BuildTagRepository(AbstractRepository[Tag]):
    model = Tag


TagRepository = BuildTagRepository()
