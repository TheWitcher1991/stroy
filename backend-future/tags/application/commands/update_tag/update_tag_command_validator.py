from packages.abstractions import AbstractValidator
from packages.kernel import Errors, ValidationResult
from tags.application.commands.update_tag.update_tag_command import UpdateTagCommand


class UpdateTagCommandValidator(AbstractValidator[UpdateTagCommand]):

    def validate(self, command: UpdateTagCommand) -> ValidationResult[UpdateTagCommand]:

        if not command.tag_id:
            self.errors.add(Errors.value_is_required("tag_id"))

        if not command.name:
            self.errors.add(Errors.null("name"))

        if len(command.name) < 3:
            self.errors.add(Errors.value_is_invalid("name"))

        return self.execute()
