from packages.services import Repository
from tags.domain.tag import TagEntity
from tags.infrastructure.mapper import TagMapper
from tags.infrastructure.models import Tag


class TagRepository(Repository[TagEntity]):
    def __init__(self, model: type[Tag] = Tag, mapper: TagMapper = TagMapper()):
        super().__init__(model, mapper)
