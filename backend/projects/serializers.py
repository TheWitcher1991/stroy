from rest_framework import serializers

from projects.models import Project


class ProjectSerializer(serializers.ModelSerializer):
    documents = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Project
        fields = "__all__"
        read_only_fields = ("id", "department", "created_at", "updated_at")

    def get_documents(self, obj: Project):
        from documents.repository import DocumentRepository

        return DocumentRepository.filter(project_id=obj.pk).count()

    def create(self, validated_data):
        validated_data["department"] = self.context["request"].user.department

        project = super().create(validated_data)

        return project
