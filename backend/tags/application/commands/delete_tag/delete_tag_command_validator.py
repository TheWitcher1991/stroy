from packages.abstractions import AbstractValidator
from packages.kernel import Errors, ValidationResult
from tags.application.commands.delete_tag.delete_tag_command import DeleteTagCommand


class DeleteTagCommandValidator(AbstractValidator[DeleteTagCommand]):

    def validate(self, command: DeleteTagCommand) -> ValidationResult[DeleteTagCommand]:

        if not command.tag_id:
            self.errors.add(Errors.value_is_required("tag_id"))

        return self.execute()
