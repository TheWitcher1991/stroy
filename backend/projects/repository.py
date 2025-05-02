from packages.mixins import AbstractRepository
from projects.models import Project


class BuildGuardRepository(AbstractRepository[Project]):
    model = Project


ProjectRepository = BuildGuardRepository()
