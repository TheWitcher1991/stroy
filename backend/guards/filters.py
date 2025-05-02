from django_filters.rest_framework import FilterSet

from guards.models import Guard


class GuardFilter(FilterSet):

    class Meta:
        model = Guard
        fields = ("title",)
