from rest_framework import status
from rest_framework.response import Response

from packages.framework import AnonymousController
from users.application.commands.login_user.login_user_command import LoginUserCommand
from users.application.commands.login_user.login_user_handler import LoginUserCommandHandler
from users.application.commands.signup_user.signup_user_command import SignupUserCommand
from users.contracts.login_user_request import LoginUserRequest
from users.contracts.signup_user_request import SignupUserRequest
from users.presentation.providers import signup_user_command, user_repository
from users.presentation.serializers import LoginUserSerializer


class LoginUserController(AnonymousController):

    serializer_class = LoginUserSerializer

    def handler(self):
        return LoginUserCommandHandler(request=self.request, repository=user_repository)

    def post(self, *args, **kwargs):
        serializer = self.get_serializer(data=self.request.data)

        serializer.is_valid(raise_exception=True)

        login_request = LoginUserRequest(**serializer.validated_data)

        command = LoginUserCommand(email=login_request.email, password=login_request.password)

        result = self.handler().handle(command)

        if result.is_failure:
            return Response(result.to_response(), status=status.HTTP_400_BAD_REQUEST)

        return Response(result.value, status=status.HTTP_200_OK)


class SignupUserController(AnonymousController):

    serializer_class = LoginUserSerializer

    def post(self, *args, **kwargs):
        serializer = self.get_serializer(data=self.request.data)

        serializer.is_valid(raise_exception=True)

        signup_request = SignupUserRequest(**serializer.validated_data)

        command = SignupUserCommand(
            first_name=signup_request.first_name,
            last_name=signup_request.last_name,
            email=signup_request.email,
            password=signup_request.password,
            department_name=signup_request.department_name,
        )

        result = signup_user_command.handle(command)

        if result.is_failure:
            return Response(result.to_response(), status=status.HTTP_400_BAD_REQUEST)

        return Response(status=status.HTTP_200_OK)
