from django_filters.rest_framework import CharFilter

from journal.models import Journal
from packages.mixins import BaseFilterSet


class JournalFilter(BaseFilterSet):
    document_id = CharFilter(field_name="document_id")

    class Meta:
        model = Journal
        fields = ("action",)
