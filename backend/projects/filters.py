from packages.mixins import BaseFilterSet
from projects.models import Project


class ProjectFilter(BaseFilterSet):

    class Meta:
        model = Project
        fields = ("title",)
