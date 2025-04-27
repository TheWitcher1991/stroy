from packages.abstractions import CommandHandler
from packages.kernel import Errors, Result
from tags.application.commands.delete_tag.delete_tag_command import DeleteTagCommand
from tags.application.commands.delete_tag.delete_tag_command_validator import DeleteTagCommandValidator
from tags.infrastructure.repository import TagRepository


class DeleteTagCommandHandler(CommandHandler):
    def __init__(self, repository: TagRepository, validator: DeleteTagCommandValidator):
        self.repository = repository
        self.validator = validator

    def handle(self, command: DeleteTagCommand):
        validation_result = self.validator.validate(command)

        if not validation_result.is_valid:
            return Result.failure(validation_result.to_list())

        tag_result = self.repository.get_by_id(command.tag_id)

        if not tag_result:
            return Result.failure(Errors.not_found(command.tag_id).to_list())

        self.repository.delete(tag_result)

        return Result.success("Успешно удален")
