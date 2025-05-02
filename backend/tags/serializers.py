from rest_framework import serializers

from tags.models import Tag


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = "__all__"
        read_only_fields = ("id", "department", "created_at", "updated_at")

    def create(self, validated_data):
        validated_data["department"] = self.context["request"].user.department

        tag = super().create(validated_data)

        return tag
