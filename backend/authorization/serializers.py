from django.contrib.auth import authenticate
from django.db import transaction
from rest_framework import serializers
from rest_framework.exceptions import ValidationError

from config.settings import AUTH_TOKEN_TYPE
from departments.repository import DepartmentRepository
from packages.services.jwt import JWTService
from packages.utils import validate_user_email
from users.models import User
from users.repository import UserRepository


class SignupSerializer(serializers.ModelSerializer):
    department_name = serializers.CharField(required=True, write_only=True)

    class Meta:
        model = User
        fields = (
            "email",
            "password",
            "first_name",
            "last_name",
            "department_name",
        )

    @transaction.atomic
    def create(self, validated_data):
        validate_user_email(validated_data["email"])

        department_name = validated_data.pop("department_name")

        if not department_name:
            raise ValidationError("department_name is required")

        department = DepartmentRepository.create(
            name=department_name,
        )

        user = UserRepository.create_superuser(
            **validated_data,
            department=department,
        )

        return user


class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField(required=True, write_only=True)
    password = serializers.CharField(required=True, write_only=True)
    access_token = serializers.CharField(read_only=True)
    refresh_token = serializers.CharField(read_only=True)
    session_expires = serializers.CharField(read_only=True)
    access_expires = serializers.CharField(read_only=True)
    user = serializers.IntegerField(read_only=True)
    department = serializers.IntegerField(read_only=True)
    department_name = serializers.CharField(read_only=True)

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation.pop("email", None)
        representation.pop("password", None)
        return representation

    def validate(self, attrs):
        email = attrs.get("email")
        password = attrs.get("password")

        if not email or not password:
            raise ValidationError("Email и пароль обязательны")

        try:
            user = authenticate(self.context["request"], email=email, password=password)
        except Exception:
            raise ValidationError("Неверный логин или пароль")

        try:
            session = JWTService.sign(user)
        except Exception:
            raise ValidationError("Ошибка авторизации")

        attrs["access_token"] = session.get("access_token")
        attrs["refresh_token"] = session.get("refresh_token")
        attrs["session_expires"] = session.get("session_expires")
        attrs["access_expires"] = session.get("access_expires")
        attrs["token_type"] = AUTH_TOKEN_TYPE
        attrs["user"] = user.id
        attrs["department"] = user.department.id
        attrs["department_name"] = user.department.title

        return attrs
