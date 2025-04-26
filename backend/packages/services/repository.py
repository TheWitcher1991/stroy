from typing import Optional, TypeVar, Type

from packages.abstractions import AbstractRepository


T = TypeVar("T")


class Repository(AbstractRepository[T]):
    def __init__(self, model: Type[T]):
        self.model = model

    def get(self, **kwargs) -> Optional[T]:
        return self.model.objects.filter(**kwargs).first()

    def get_by_id(self, id: int) -> Optional[T]:
        try:
            return self.model.objects.get(id=id)
        except self.model.DoesNotExist:
            return None

    def filter(self, **kwargs) -> list[T]:
        return list(self.model.objects.filter(**kwargs))

    def exclude(self, **kwargs) -> list[T]:
        return list(self.model.objects.exclude(**kwargs))

    def list(self) -> list[T]:
        return list(self.model.objects.all())

    def add(self, entity: T) -> T:
        entity.save()
        return entity

    def save(self, entity: T) -> None:
        entity.save()

    def update(self, entity: T) -> None:
        entity.save()

    def delete(self, entity: T) -> None:
        entity.delete()
