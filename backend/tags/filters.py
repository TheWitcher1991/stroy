from packages.mixins import BaseFilterSet
from tags.models import Tag


class TagFilter(BaseFilterSet):

    class Meta:
        model = Tag
        fields = ("title",)
