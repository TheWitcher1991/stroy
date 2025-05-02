from typing import Generic, Optional, Type, TypeVar

from django.db.models import Model

from packages.abstractions import AbstractMapper, AbstractRepository, Entity

ModelType = TypeVar("ModelType", bound=Model)
EntityType = TypeVar("EntityType", bound=Entity)
MapperType = TypeVar("MapperType", bound=AbstractMapper)


class Repository(Generic[ModelType, EntityType, MapperType], AbstractRepository[EntityType]):
    model: Type[ModelType]
    mapper: MapperType

    def __init__(self) -> None:
        if not hasattr(self, "model") or not hasattr(self, "mapper"):
            raise NotImplementedError("Subclasses must define 'model' and 'mapper' attributes.")

    def _get_queryset(self):
        return self.model.objects

    def get(self, **kwargs) -> Optional[EntityType]:
        try:
            return self.mapper.to_domain(self._get_queryset().get(**kwargs))
        except self.model.DoesNotExist:
            return None

    def get_by_id(self, id: int) -> Optional[EntityType]:
        return self.get(pk=id)

    def filter(self, **kwargs) -> list[EntityType]:
        return self.mapper.to_domain_list(self._get_queryset().filter(**kwargs))

    def exclude(self, **kwargs) -> list[EntityType]:
        return self.mapper.to_domain_list(self._get_queryset().exclude(**kwargs))

    def list(self) -> list[EntityType]:
        return self.mapper.to_domain_list(self._get_queryset().all())

    def add(self, entity: EntityType) -> ModelType:
        instance = self.mapper.from_domain(entity)
        return instance

    def update(self, entity: EntityType) -> ModelType:
        if not entity.id:
            raise ValueError("Cannot update entity without ID.")
        instance = self.mapper.from_domain(entity)
        return instance

    def delete(self, entity: EntityType) -> None:
        if not entity.id:
            raise ValueError("Cannot delete entity without ID.")
        deleted, _ = self._get_queryset().filter(pk=entity.id).delete()
        if deleted == 0:
            raise self.model.DoesNotExist(f"{self.model.__name__} with id={entity.id} does not exist.")

    def save(self, instance: ModelType) -> None:
        instance.save()
