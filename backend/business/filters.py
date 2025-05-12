from business.models import Invoice
from packages.mixins import BaseFilterSet


class InvoiceFilter(BaseFilterSet):

    class Meta:
        model = Invoice
        fields = ("department",)
