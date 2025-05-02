from django_filters.rest_framework import FilterSet

from projects.models import Project


class ProjectFilter(FilterSet):

    class Meta:
        model = Project
        fields = ("title",)
