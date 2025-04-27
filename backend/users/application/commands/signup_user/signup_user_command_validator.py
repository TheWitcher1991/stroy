from packages.abstractions import AbstractValidator
from packages.kernel import Errors, ValidationResult
from users.application.commands.signup_user.signup_user_command import SignupUserCommand


class SignupUserCommandValidator(AbstractValidator[SignupUserCommand]):

    def validate(self, command: SignupUserCommand) -> ValidationResult[SignupUserCommand]:

        if not command.first_name:
            self.errors.add(Errors.null("name"))

        if len(command.first_name) < 3:
            self.errors.add(Errors.value_is_invalid("name"))

        return self.execute()
