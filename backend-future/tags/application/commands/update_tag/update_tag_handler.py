from packages.abstractions import CommandHandler
from packages.kernel import Errors, Result
from tags.application.commands.update_tag.update_tag_command import UpdateTagCommand
from tags.application.commands.update_tag.update_tag_command_validator import UpdateTagCommandValidator
from tags.infrastructure.repository import TagRepository


class UpdateTagCommandHandler(CommandHandler):
    def __init__(self, repository: TagRepository, validator: UpdateTagCommandValidator):
        self.repository = repository
        self.validator = validator

    def handle(self, command: UpdateTagCommand):
        validation_result = self.validator.validate(command)

        if not validation_result.is_valid:
            return Result.failure(validation_result.to_list())

        tag_result = self.repository.get_by_id(command.tag_id)

        if not tag_result:
            return Result.failure(Errors.not_found(command.tag_id).to_list())

        tag_entity = self.repository.update(tag_result)

        tag_entity.save()

        return Result.success(tag_entity)
