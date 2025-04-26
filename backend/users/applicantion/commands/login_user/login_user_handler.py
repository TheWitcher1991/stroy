from django.contrib.auth import authenticate
from rest_framework.request import Request

from config.settings import AUTH_TOKEN_TYPE
from packages.abstractions import CommandHandler
from packages.kernel import Errors, Result
from packages.services.jwt import JWTService
from users.applicantion.commands.login_user.login_user_command import LoginUserCommand
from users.contracts.login_user_response import LoginUserResponse
from users.infrastructure.repository import UserRepository


class LoginUserCommandHandler(CommandHandler):
    def __init__(self, request: Request, repository: UserRepository, jwt: JWTService = JWTService):
        self.request = request
        self.repository = repository
        self.jwt = jwt

    def handle(self, command: LoginUserCommand):
        try:
            user = authenticate(request=self.request, email=command.email, password=command.password)

            session = self.jwt.sign(user)

            return Result.success(
                LoginUserResponse(
                    access_token=session.get("access_token"),
                    refresh_token=session.get("refresh_token"),
                    session_expires=session.get("session_expires"),
                    access_expires=session.get("access_expires"),
                    token_type=AUTH_TOKEN_TYPE,
                    user=user.id,
                )
            )
        except ValueError:
            return Result.failure(Errors.invalid_credentials().to_list())
