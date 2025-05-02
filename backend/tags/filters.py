from django_filters.rest_framework import FilterSet

from tags.models import Tag


class TagFilter(FilterSet):

    class Meta:
        model = Tag
        fields = ("title",)
