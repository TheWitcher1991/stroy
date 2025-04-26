from packages.abstractions import AbstractMapper
from tags.domain.tag import TagEntity
from tags.infrastructure.models import Tag


class TagMapper(AbstractMapper[Tag, TagEntity]):

    def to_domain(self, instance: Tag) -> TagEntity:
        return TagEntity(id=instance.id, name=instance.name)

    def from_domain(self, instance: TagEntity) -> Tag:
        return Tag(id=instance.id, name=instance.name)
