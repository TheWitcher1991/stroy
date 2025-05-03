from django_filters.rest_framework import FilterSet

from journal.models import Journal


class JournalFilter(FilterSet):

    class Meta:
        model = Journal
        fields = ("action",)
