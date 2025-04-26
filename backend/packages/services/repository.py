from typing import TypeVar, Type

from django.db.models import Model

from packages.abstractions import AbstractRepository, AbstractMapper, Entity

ModelType = TypeVar("ModelType", bound=Model)
EntityType = TypeVar("EntityType", bound=Entity)
MapperType = TypeVar("MapperType", bound=AbstractMapper)


class Repository(AbstractRepository[EntityType]):
    def __init__(self, model: Type[ModelType], mapper: MapperType):
        self.model = model
        self.mapper = mapper

    def get(self, **kwargs) -> EntityType | None:
        try:
            return self.mapper.to_domain(self.model.objects.get(**kwargs))
        except self.model.DoesNotExist:
            return None

    def get_by_id(self, id: int) -> EntityType | None:
        try:
            return self.mapper.to_domain(self.model.objects.get(pk=id))
        except self.model.DoesNotExist:
            return None

    def filter(self, **kwargs) -> list[EntityType]:
        return self.mapper.to_domain_list(self.model.objects.filter(**kwargs))

    def exclude(self, **kwargs) -> list[EntityType]:
        return self.mapper.to_domain_list(self.model.objects.exclude(**kwargs))

    def list(self) -> list[EntityType]:
        return self.mapper.to_domain_list(self.model.objects.all())

    def add(self, entity: EntityType) -> EntityType:
        instance = self.model(**self.mapper.to_entity_dict(entity))
        instance.save()
        return self.mapper.to_domain(instance)

    def save(self, entity: EntityType) -> EntityType:
        instance = self.mapper.from_domain(entity)
        instance.save()
        return self.mapper.to_domain(instance)

    def update(self, entity: EntityType) -> EntityType:
        instance = self.mapper.from_domain(entity)
        instance.save()
        return self.mapper.to_domain(instance)

    def delete(self, entity: EntityType) -> None:
        self.model.objects.filter(pk=entity.id).delete()
