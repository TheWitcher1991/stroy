from departments.infrastructure.mapper import DepartmentMapper
from packages.abstractions import AbstractMapper
from tags.domain.tag import TagEntity
from tags.infrastructure.models import Tag


class TagMapper(AbstractMapper[Tag, TagEntity]):

    def __init__(self, department_mapper: DepartmentMapper = DepartmentMapper()):
        self.department_mapper = department_mapper

    def to_domain(self, instance: Tag) -> TagEntity:
        return TagEntity(
            id=instance.id, name=instance.name, department=self.department_mapper.to_domain(instance.department)
        )

    def from_domain(self, instance: TagEntity) -> Tag:
        return Tag(
            id=instance.id, name=instance.name, department=self.department_mapper.from_domain(instance.department)
        )
