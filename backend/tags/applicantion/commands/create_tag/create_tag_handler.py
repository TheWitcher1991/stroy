from packages.abstractions import CommandHandler
from packages.kernel import Result
from tags.applicantion.commands.create_tag.create_tag_command import CreateTagCommand
from tags.applicantion.commands.create_tag.create_tag_command_validator import CreateTagCommandValidator
from tags.domain.tag import TagEntity
from tags.infrastructure.repository import TagRepository


class CreateTagCommandHandler(CommandHandler):
    def __init__(self, repository: TagRepository, validator: CreateTagCommandValidator):
        self.repository = repository
        self.validator = validator

    def handle(self, command: CreateTagCommand):
        validation_result = self.validator.validate(command)

        if not validation_result.is_valid:
            return Result.failure(validation_result.to_list())

        tag_entity = TagEntity.new(name=command.name)

        tag = self.repository.add(tag_entity)

        return Result.success(tag)
