from rest_framework import serializers

from config.settings import CHAR_MAX_LENGTH
from packages.framework import Serializer


class CreateDepartmentSerializer(Serializer):
    name = serializers.CharField(max_length=CHAR_MAX_LENGTH, required=True)
