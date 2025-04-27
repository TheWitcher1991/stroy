from departments.application.commands.create_department.create_department_command import CreateDepartmentCommand
from departments.application.commands.create_department.create_department_command_validator import (
    CreateDepartmentCommandValidator,
)
from departments.domain.department import DepartmentEntity
from departments.infrastructure.repository import DepartmentRepository
from packages.abstractions import CommandHandler
from packages.kernel import Result


class CreateDepartmentCommandHandler(CommandHandler):
    def __init__(self, repository: DepartmentRepository, validator: CreateDepartmentCommandValidator):
        self.repository = repository
        self.validator = validator

    def handle(self, command: CreateDepartmentCommand):
        validation_result = self.validator.validate(command)

        if not validation_result.is_valid:
            return Result.failure(validation_result.to_list())

        department_entity = DepartmentEntity.new(name=command.name)

        department = self.repository.add(department_entity)

        return Result.success(department)
