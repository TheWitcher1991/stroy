from rest_framework import serializers

from config.settings import CHAR_MAX_LENGTH
from packages.framework import Serializer


class CreateTagSerializer(Serializer):
    name = serializers.CharField(max_length=CHAR_MAX_LENGTH, required=True)
    department = serializers.IntegerField(required=True)


class UpdateTagSerializer(Serializer):
    name = serializers.CharField(max_length=CHAR_MAX_LENGTH, required=True)
