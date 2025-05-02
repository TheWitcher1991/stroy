from django.db import transaction
from rest_framework import serializers

from guards.models import Guard
from guards.repository import GuardOperationRepository
from guards.types import OperationType
from packages.utils import t


class GuardSerializer(serializers.Serializer):
    operations = serializers.ListField(
        child=serializers.ChoiceField(choices=OperationType.choices),
        write_only=True,
        required=False,
        help_text=t("Список guard operations"),
    )
    permissions = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Guard
        fields = "__all__"
        read_only_fields = ("id", "created_at", "updated_at")

    def get_permissions(self, obj: Guard):
        return [op.operation for op in obj.operations.all()]

    @transaction.atomic
    def create(self, validated_data):
        operations = validated_data.pop("operations", [])

        validated_data["department"] = self.context["request"].user.department

        guard = super().create(validated_data)

        for operation in operations:
            GuardOperationRepository.create(guard, operation)

        return guard

    @transaction.atomic
    def update(self, instance, validated_data):
        operations = validated_data.pop("operations", [])

        guard = super().update(instance, validated_data)

        if operations is not None:
            GuardOperationRepository.clear(guard)
            GuardOperationRepository.bulk_create(guard, operations)

        return guard
