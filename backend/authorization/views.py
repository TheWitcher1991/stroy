from django.contrib.auth.models import AnonymousUser
from rest_framework import status
from rest_framework.generics import CreateAPIView
from rest_framework.response import Response

from authorization.backends import RefreshTokenAuthentication
from authorization.serializers import LoginSerializer, SignupSerializer
from config.settings import REFRESH_TOKEN_NAME, SESSION_EXPIRE_TIMEOUT
from packages.controllers import AnonymousController
from packages.services.jwt import JWTService


class SignupAPIView(AnonymousController, CreateAPIView):

    serializer_class = SignupSerializer


class LoginAPIView(AnonymousController):
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs) -> Response:
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        refresh_token = serializer.data.pop(REFRESH_TOKEN_NAME, None)

        response = Response(serializer.data, status=status.HTTP_201_CREATED)

        response.set_cookie(
            REFRESH_TOKEN_NAME,
            refresh_token,
            httponly=True,
            secure=True,
            samesite="Strict",
            expires=SESSION_EXPIRE_TIMEOUT,
        )

        return response


class RefreshAPIView(AnonymousController):
    authentication_classes = (RefreshTokenAuthentication,)

    def post(self, request, *args, **kwargs) -> Response:
        payload = JWTService.refresh(self.request.user)

        return Response(
            {
                "access_token": payload.get("access_token"),
                "access_expires": payload.get("access_expires"),
            },
            status=status.HTTP_200_OK,
        )


class LogoutAPIView(AnonymousController):

    def post(self, request, *args, **kwargs) -> Response:
        response = Response(status=status.HTTP_204_NO_CONTENT)

        response.delete_cookie(REFRESH_TOKEN_NAME)

        request.user = AnonymousUser()

        return response
