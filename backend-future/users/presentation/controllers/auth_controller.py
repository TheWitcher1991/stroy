from django.contrib.auth.models import AnonymousUser
from rest_framework import status
from rest_framework.decorators import action
from rest_framework.response import Response

from config.settings import SESSION_EXPIRE_TIMEOUT, REFRESH_TOKEN_NAME
from packages.framework import AnonymousController
from packages.services.jwt import JWTService
from users.application.commands.login_user.login_user_command import LoginUserCommand
from users.application.commands.login_user.login_user_handler import LoginUserCommandHandler
from users.application.commands.signup_user.signup_user_command import SignupUserCommand
from users.presentation.providers import user_repository, signup_user_command
from users.presentation.serializers import LoginUserSerializer, SignupUserSerializer


class AuthController(AnonymousController):

    @action(methods=["post"], detail=False, url_path="/login")
    def login(self, *args, **kwargs):
        data = self.is_valid(LoginUserSerializer)

        command = LoginUserCommand(email=data.get("email"), password=data.get("password"))

        result = LoginUserCommandHandler(request=self.request, repository=user_repository).handle(command)

        if result.is_failure:
            return Response(result.to_response(), status=status.HTTP_400_BAD_REQUEST)

        refresh_token = result.value.pop(REFRESH_TOKEN_NAME, None)

        response = Response(result.value, status=status.HTTP_200_OK)

        response.set_cookie(
            REFRESH_TOKEN_NAME,
            refresh_token,
            httponly=True,
            secure=True,
            samesite="Strict",
            expires=SESSION_EXPIRE_TIMEOUT,
        )

        return response

    @action(methods=["post"], detail=False, url_path="/signup")
    def signup(self, *args, **kwargs):
        data = self.is_valid(SignupUserSerializer)

        command = SignupUserCommand(
            first_name=data.get("first_name"),
            last_name=data.get("last_name"),
            email=data.get("email"),
            password=data.get("password"),
            department_name=data.get("department_name"),
        )

        result = signup_user_command.handle(command)

        if result.is_failure:
            return Response(result.to_response(), status=status.HTTP_400_BAD_REQUEST)

        return Response(status=status.HTTP_200_OK)

    @action(methods=["post"], detail=False, url_path="/logout")
    def logout(self, request, *args, **kwargs):
        response = Response(status=status.HTTP_204_NO_CONTENT)

        response.delete_cookie(REFRESH_TOKEN_NAME)

        request.user = AnonymousUser()

        return response

    @action(methods=["get"], detail=False, url_path="/refresh")
    def refresh(self, *args, **kwargs):
        payload = JWTService.refresh(self.request.user)

        return Response(
            {
                "access_token": payload.get("access_token"),
                "access_expires": payload.get("access_expires"),
            },
            status=status.HTTP_200_OK,
        )
