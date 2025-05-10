from django.db.models import QuerySet

from business.models import Invoice
from packages.mixins import AbstractRepository


class InvoiceRepository(AbstractRepository[Invoice]):
    model = Invoice

    def optimize(self) -> QuerySet[Invoice]:
        return self.model.objects.select_related("department")
