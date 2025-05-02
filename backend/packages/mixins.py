from typing import Generic, Type, TypeVar

from django.db.models import Model, QuerySet
from rest_framework.generics import get_object_or_404
from rest_framework.permissions import AllowAny

ModelType = TypeVar("ModelType", bound=Model)


class AllowAnyMixin(object):
    permission_classes = (AllowAny,)
    authentication_classes = ()


class AbstractRepository(Generic[ModelType]):
    model: Type[ModelType]

    def __init__(self) -> None:
        if not hasattr(self, "model"):
            raise NotImplementedError("Subclasses must define 'model' attribute.")

    @property
    def DoesNotExist(self):
        return self.model.DoesNotExist

    def count(self) -> int:
        return self.model.objects.count()

    def get_queryset(self) -> QuerySet[ModelType]:
        return self.model.objects.get_queryset()

    def all(self) -> QuerySet[ModelType]:
        return self.get_queryset().all()

    def filter(self, **kwargs) -> QuerySet[ModelType]:
        return self.get_queryset().filter(**kwargs)

    def exclude(self, **kwargs) -> QuerySet[ModelType]:
        return self.get_queryset().exclude(**kwargs)

    def get_by_id(self, pk: int) -> ModelType:
        return self.get_queryset().get(id=pk)

    def get_by_key(self, key: str, value: any) -> ModelType:
        return self.get_queryset().get(**{key: value})

    def get(self, **kwargs) -> ModelType:
        return self.get_queryset().get(**kwargs)

    def ids(self, queryset: QuerySet[ModelType]) -> list[int]:
        return list(queryset.values_list("id", flat=True))

    def get_object_or_404(self, pk: int) -> ModelType:
        return get_object_or_404(self.model, pk=pk)

    def create(self, **kwargs) -> ModelType:
        return self.model.objects.create(**kwargs)

    def update(self, pk: int, **kwargs) -> int:
        return self.get_queryset().filter(id=pk).update(**kwargs)

    def delete(self, pk: int) -> tuple[int, dict]:
        return self.get_queryset().filter(id=pk).delete()
