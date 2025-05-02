from django.db.models import QuerySet

from guards.models import Guard, GuardOperation
from packages.mixins import AbstractRepository


class BuildGuardRepository(AbstractRepository[Guard]):
    model = Guard

    def optimize(self) -> QuerySet[Guard]:
        return self.model.objects.prefetch_related("operations")


class BuildGuardOperationRepository(AbstractRepository[GuardOperation]):
    model = GuardOperation

    def clear(self, guard: Guard):
        self.filter(guard=guard).delete()

    def bulk_create(self, guard: Guard, operations: list[str]) -> list:
        return self.model.objects.bulk_create(
            [self.model(guard=guard, operation=operation) for operation in operations]
        )


GuardRepository = BuildGuardRepository()
GuardOperationRepository = BuildGuardOperationRepository()
