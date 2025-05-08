from journal.models import Journal
from packages.mixins import BaseFilterSet


class JournalFilter(BaseFilterSet):

    class Meta:
        model = Journal
        fields = ("action",)
