from datetime import timedelta

from django.db.models import QuerySet
from django.utils import timezone

from business.models import DepartmentSubscription
from departments.models import Department
from packages.mixins import AbstractRepository


class BuildSubscriptionRepository(AbstractRepository[DepartmentSubscription]):
    model = DepartmentSubscription

    def optimize(self) -> QuerySet[DepartmentSubscription]:
        return self.model.objects.select_related("department")

    def current(self, department: Department) -> DepartmentSubscription | None:
        return self.optimize().filter(department=department, is_active=True).order_by("-end_date").first()

    def unsubscribe(self, department: Department):
        self.optimize().filter(department=department, is_active=True).update(is_active=False)

    def renew(self, department: Department):
        self.optimize().filter(department=department, is_active=False).update(is_active=True)

    def subscribe(self, department: Department):
        today = timezone.now().date()
        current_subscription = self.current(department)

        if current_subscription and current_subscription.end_date >= today:
            new_end_date = current_subscription.end_date + timedelta(days=30)
            current_subscription.end_date = new_end_date
            current_subscription.save()
        else:
            start_date = today
            end_date = start_date + timedelta(days=30)

            self.unsubscribe(department)

            self.update_or_create(
                department=department, defaults={"is_active": True, "start_date": start_date, "end_date": end_date}
            )


SubscriptionRepository = BuildSubscriptionRepository()
