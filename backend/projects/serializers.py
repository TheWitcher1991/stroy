from rest_framework import serializers

from projects.models import Project


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = "__all__"
        read_only_fields = ("id", "department", "created_at", "updated_at")

    def create(self, validated_data):
        validated_data["department"] = self.context["request"].user.department

        project = super().create(validated_data)

        return project
