from departments.application.commands.create_department.create_department_command import CreateDepartmentCommand
from packages.abstractions import AbstractValidator
from packages.kernel import Errors, ValidationResult


class CreateDepartmentCommandValidator(AbstractValidator[CreateDepartmentCommand]):

    def validate(self, command: CreateDepartmentCommand) -> ValidationResult[CreateDepartmentCommand]:

        if not command.name:
            self.errors.add(Errors.null("name"))

        if len(command.name) < 3:
            self.errors.add(Errors.value_is_invalid("name"))

        return self.execute()
