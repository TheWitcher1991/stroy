from django.db.models import QuerySet

from packages.mixins import AbstractRepository
from tags.models import Tag


class BuildTagRepository(AbstractRepository[Tag]):
    model = Tag

    def optimize(self) -> QuerySet[Tag]:
        return self.model.objects.select_related("department")


TagRepository = BuildTagRepository()
