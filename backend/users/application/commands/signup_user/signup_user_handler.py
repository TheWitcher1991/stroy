from departments.domain.department import DepartmentEntity
from departments.infrastructure.repository import DepartmentRepository
from packages.abstractions import CommandHandler
from packages.kernel import Errors, Result
from packages.services import UnitOfWork
from users.application.commands.signup_user.signup_user_command import SignupUserCommand
from users.application.commands.signup_user.signup_user_command_validator import SignupUserCommandValidator
from users.domain.user import UserEntity
from users.infrastructure.repository import UserRepository


class SignupUserCommandHandler(CommandHandler):
    def __init__(
        self,
        user_repository: UserRepository,
        department_repository: DepartmentRepository,
        validator: SignupUserCommandValidator,
    ):
        self.user_repository = user_repository
        self.department_repository = department_repository
        self.validator = validator

    def handle(self, command: SignupUserCommand):
        validation_result = self.validator.validate(command)

        if not validation_result.is_valid:
            return Result.failure(validation_result.to_list())

        try:
            with UnitOfWork() as uow:
                department_entity = DepartmentEntity.new(name=command.department_name)

                department = self.department_repository.add(department_entity)

                self.department_repository.save(department)

                user_entity = UserEntity.new(
                    first_name=command.first_name,
                    last_name=command.last_name,
                    email=command.email,
                    password=command.password,
                    department=department_entity,
                )

                user = self.user_repository.add(user_entity)

                self.user_repository.save(user)

                uow.commit()

                return Result.success()
        except Exception as e:
            uow.rollback()
            return Result.failure(Errors.internal(str(e)))
