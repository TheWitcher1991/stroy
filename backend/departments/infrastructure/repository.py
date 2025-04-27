from departments.domain.department import DepartmentEntity
from departments.infrastructure.mapper import DepartmentMapper
from departments.infrastructure.models import Department
from packages.services import Repository


class DepartmentRepository(Repository[Department, DepartmentEntity, DepartmentMapper]):
    model = Department
    mapper = DepartmentMapper()
