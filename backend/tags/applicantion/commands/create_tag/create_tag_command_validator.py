from packages.abstractions import AbstractValidator
from packages.kernel import Errors, ValidationResult
from tags.applicantion.commands.create_tag.create_tag_command import CreateTagCommand


class CreateTagCommandValidator(AbstractValidator[CreateTagCommand]):

    def validate(self, command: CreateTagCommand) -> ValidationResult[CreateTagCommand]:

        if not command.name:
            self.errors.add(Errors.null("name"))

        if len(command.name) < 3:
            self.errors.add(Errors.value_is_invalid("name"))

        return self.execute()
