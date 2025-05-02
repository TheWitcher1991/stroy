from django.db.models import QuerySet

from packages.mixins import AbstractRepository
from users.models import User


class BuildUserRepository(AbstractRepository[User]):
    model = User

    def optimize(self) -> QuerySet[User]:
        return self.model.objects.prefetch_related("documents").select_related("guard", "department")

    def create_superuser(self, **kwargs):
        return self.model.objects.create_superuser(**kwargs)


UserRepository = BuildUserRepository()
