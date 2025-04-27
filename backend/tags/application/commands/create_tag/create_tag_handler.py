from departments.infrastructure.repository import DepartmentRepository
from packages.abstractions import CommandHandler
from packages.kernel import Errors, Result
from tags.application.commands.create_tag.create_tag_command import CreateTagCommand
from tags.application.commands.create_tag.create_tag_command_validator import CreateTagCommandValidator
from tags.domain.tag import TagEntity
from tags.infrastructure.repository import TagRepository


class CreateTagCommandHandler(CommandHandler):
    def __init__(
        self,
        tag_repository: TagRepository,
        department_repository: DepartmentRepository,
        validator: CreateTagCommandValidator,
    ):
        self.tag_repository = tag_repository
        self.department_repository = department_repository
        self.validator = validator

    def handle(self, command: CreateTagCommand):
        validation_result = self.validator.validate(command)

        if not validation_result.is_valid:
            return Result.failure(validation_result.to_list())

        department = self.department_repository.get_by_id(command.department_id)

        if not department:
            return Result.failure(Errors.not_found(department.id).to_list())

        tag_entity = TagEntity.new(name=command.name, department=department)

        tag = self.tag_repository.add(tag_entity)

        self.tag_repository.save(tag)

        return Result.success(tag)
