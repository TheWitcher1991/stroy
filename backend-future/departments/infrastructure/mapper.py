from departments.domain.department import DepartmentEntity
from departments.infrastructure.models import Department
from packages.abstractions import AbstractMapper


class DepartmentMapper(AbstractMapper[Department, DepartmentEntity]):

    def to_domain(self, instance: Department) -> DepartmentEntity:
        pass

    def from_domain(self, instance: DepartmentEntity) -> Department:
        pass
