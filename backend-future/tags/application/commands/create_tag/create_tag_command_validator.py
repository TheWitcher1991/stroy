from packages.abstractions import AbstractValidator
from packages.kernel import Errors, ValidationResult
from tags.application.commands.create_tag.create_tag_command import CreateTagCommand


class CreateTagCommandValidator(AbstractValidator[CreateTagCommand]):

    def validate(self, command: CreateTagCommand) -> ValidationResult[CreateTagCommand]:

        if not command.department_id:
            self.errors.add(Errors.value_is_required("department_id"))

        if not command.name:
            self.errors.add(Errors.null("name"))

        if len(command.name) < 3:
            self.errors.add(Errors.value_is_invalid("name"))

        return self.execute()
