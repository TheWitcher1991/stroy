from departments.models import Department
from packages.mixins import BaseFilterSet


class DepartmentFilter(BaseFilterSet):

    class Meta:
        model = Department
        fields = ("name",)
