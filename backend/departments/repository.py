from departments.models import Department
from packages.mixins import AbstractRepository


class BuildDepartmentRepository(AbstractRepository[Department]):
    model = Department


DepartmentRepository = BuildDepartmentRepository()
