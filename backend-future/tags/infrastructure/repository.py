from packages.services import Repository
from tags.domain.tag import TagEntity
from tags.infrastructure.mapper import TagMapper
from tags.infrastructure.models import Tag


class TagRepository(Repository[Tag, TagEntity, TagMapper]):
    model = Tag
    mapper = TagMapper()
