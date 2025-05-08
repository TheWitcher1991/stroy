from guards.models import Guard
from packages.mixins import BaseFilterSet


class GuardFilter(BaseFilterSet):

    class Meta:
        model = Guard
        fields = ("title",)
