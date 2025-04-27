from departments.infrastructure.repository import DepartmentRepository
from users.application.commands.signup_user.signup_user_command_validator import SignupUserCommandValidator
from users.application.commands.signup_user.signup_user_handler import SignupUserCommandHandler
from users.infrastructure.repository import UserRepository

user_repository = UserRepository()

signup_user_validator = SignupUserCommandValidator()

department_repository = DepartmentRepository()

signup_user_command = SignupUserCommandHandler(user_repository, department_repository, signup_user_validator)
