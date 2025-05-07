from django.db.models import QuerySet

from packages.mixins import AbstractRepository
from projects.models import Project


class BuildGuardRepository(AbstractRepository[Project]):
    model = Project
    cache_prefix = "projects"

    def optimize(self) -> QuerySet[Project]:
        return self.model.objects.select_related("department")


ProjectRepository = BuildGuardRepository()
