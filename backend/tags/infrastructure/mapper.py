from departments.domain.department import DepartmentEntity
from packages.abstractions import AbstractMapper
from tags.domain.tag import TagEntity
from tags.infrastructure.models import Tag


class TagMapper(AbstractMapper[Tag, TagEntity]):

    def to_domain(self, instance: Tag) -> TagEntity:
        return TagEntity(id=instance.id, name=instance.name, department=DepartmentEntity(name=instance.department.name))

    def from_domain(self, instance: TagEntity) -> Tag:
        return Tag(id=instance.id, name=instance.name, department=instance.department.id)
