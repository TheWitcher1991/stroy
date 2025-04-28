from rest_framework import serializers

from config.settings import CHAR_MAX_LENGTH
from packages.framework import Serializer


class LoginUserSerializer(Serializer):
    email = serializers.EmailField(max_length=CHAR_MAX_LENGTH)
    password = serializers.CharField(max_length=CHAR_MAX_LENGTH)


class SignupUserSerializer(Serializer):
    email = serializers.EmailField(max_length=CHAR_MAX_LENGTH)
