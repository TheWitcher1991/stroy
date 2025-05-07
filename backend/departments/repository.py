from departments.models import Department
from packages.mixins import AbstractRepository


class BuildDepartmentRepository(AbstractRepository[Department]):
    model = Department
    cache_prefix = "departments"


DepartmentRepository = BuildDepartmentRepository()
