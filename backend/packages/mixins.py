from typing import Generic, Type, TypeVar, Any, Optional

from django.core.cache import cache
from django.db.models import Model, QuerySet
from rest_framework.generics import get_object_or_404
from rest_framework.permissions import AllowAny

from packages.caching import clean_cache_by_tag

ModelType = TypeVar("ModelType", bound=Model)


class AllowAnyMixin(object):
    permission_classes = (AllowAny,)
    authentication_classes = ()


class AbstractRepository(Generic[ModelType]):
    model: Type[ModelType]

    cache_prefix: str = "service"
    cache_queryset_key: str = "queryset"
    cache_object_key: str = "object"
    cache_retrieve_key: str = "retrieve"
    cache_prefix_delimiter: str = "_"

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

    def get_queryset_cache_key(self) -> str:
        return f"{self.cache_prefix}{self.cache_prefix_delimiter}{self.cache_queryset_key}"

    def get_object_cache_key(self, pk: int) -> str:
        return (
            f"{self.cache_prefix}{self.cache_prefix_delimiter}{self.cache_object_key}{self.cache_prefix_delimiter}{pk}"
        )

    def get_retrieve_cache_key(self, pk: int) -> str:
        return f"{self.cache_prefix}{self.cache_prefix_delimiter}{self.cache_retrieve_key}{self.cache_prefix_delimiter}{pk}"

    def get_cache_key(self, key: str) -> str:
        return f"{self.cache_prefix}{self.cache_prefix_delimiter}{key}"

    def set_cache(self, key: str, value: Any, timeout: Optional[int] = None):
        cache.set(self.get_cache_key(key), value, timeout)

    def get_cache(self, key: str) -> Optional[Any]:
        return cache.get(self.get_cache_key(key))

    def delete_cache(self, key: str):
        cache.delete(self.get_cache_key(key))

    def delete_global_cache(self):

        clean_cache_by_tag(f"{self.cache_prefix}")

    def delete_queryset_cache(self):
        clean_cache_by_tag(f"{self.cache_prefix}{self.cache_prefix_delimiter}{self.cache_queryset_key}")

    def delete_object_cache(self, pk: int):
        clean_cache_by_tag(
            f"{self.cache_prefix}{self.cache_prefix_delimiter}{self.cache_object_key}{self.cache_prefix_delimiter}{pk}"
        )

    def delete_retrieve_cache(self, pk: int):
        clean_cache_by_tag(
            f"{self.cache_prefix}{self.cache_prefix_delimiter}{self.cache_retrieve_key}{self.cache_prefix_delimiter}{pk}"
        )

    def delete_user_queryset_cache(self, user_id: int):
        clean_cache_by_tag(
            f"{self.cache_prefix}{self.cache_prefix_delimiter}{self.cache_queryset_key}{self.cache_prefix_delimiter}{user_id}"
        )

    def delete_user_object_cache(self, user_id: int, pk: int):
        clean_cache_by_tag(
            f"{self.cache_prefix}{self.cache_prefix_delimiter}{self.cache_object_key}{self.cache_prefix_delimiter}{pk}{self.cache_prefix_delimiter}{user_id}"
        )

    def delete_user_retrieve_cache(self, user_id: int, pk: int):
        clean_cache_by_tag(
            f"{self.cache_prefix}{self.cache_prefix_delimiter}{self.cache_retrieve_key}{self.cache_prefix_delimiter}{pk}{self.cache_prefix_delimiter}{user_id}"
        )
