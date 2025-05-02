from rest_framework import serializers

from users.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"
        read_only_fields = ("id", "department", "created_at", "updated_at")

    def create(self, validated_data):
        validated_data["department"] = self.context["request"].user.department

        user = super().create(validated_data)

        return user
