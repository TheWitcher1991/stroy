from django.db import transaction
from rest_framework import serializers

from documents.models import Document, DocumentPermission, DocumentVersion
from documents.repository import DocumentPermissionRepository
from documents.utils import generate_doc_number
from guards.repository import GuardOperationRepository
from packages.utils import get_content_type, get_file_type, userFromContext


class DocumentPermissionSerializer(serializers.ModelSerializer):

    class Meta:
        model = DocumentPermission
        fields = "__all__"


class DocumentVersionSerializer(serializers.ModelSerializer):
    modified_by = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = DocumentVersion
        fields = "__all__"

    def get_modified_by(self, obj: DocumentVersion):
        from users.serializers import AuthorSerializer

        return AuthorSerializer(obj.modified_by).data


class DocumentSerializer(serializers.ModelSerializer):
    project = serializers.SerializerMethodField(read_only=True)
    author = serializers.SerializerMethodField(read_only=True)
    tag = serializers.SerializerMethodField(read_only=True)
    versions = DocumentVersionSerializer(many=True, read_only=True)
    permissions = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Document
        fields = "__all__"

    def get_project(self, obj: Document):
        from projects.serializers import ProjectSerializer

        return ProjectSerializer(obj.project).data

    def get_author(self, obj: Document):
        from users.serializers import AuthorSerializer

        return AuthorSerializer(obj.author).data

    def get_tag(self, obj: Document):
        from tags.serializers import TagSerializer

        return TagSerializer(obj.tag).data

    def get_permissions(self, obj: Document):
        user = userFromContext(self.context)

        try:
            doc_permission = DocumentPermissionRepository.get(user=user, document=obj)
            guard = doc_permission.guard
        except DocumentPermissionRepository.DoesNotExist:
            guard = user.guard

        if not guard:
            return []

        return list(guard.operations.values_list("operation", flat=True))


class DocumentActionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Document
        fields = ("title", "file", "project", "tag")
        extra_kwargs = {
            "file": {"required": False},
        }

    @transaction.atomic
    def create(self, validated_data):
        author = userFromContext(self.context)
        file = validated_data.get("file", None)

        if not file:
            raise serializers.ValidationError("File is required.")

        validated_data["version_number"] = 1
        validated_data["doc_number"] = generate_doc_number(validated_data["project"])
        validated_data["doc_type"] = get_file_type(file)
        validated_data["content_type"] = get_content_type(file)
        validated_data["size"] = file.size
        validated_data["author"] = author

        document = super().create(validated_data)

        return document

    @transaction.atomic
    def update(self, instance, validated_data):
        file = validated_data.get("file", None)

        if file:
            validated_data["doc_type"] = get_file_type(file)
            validated_data["content_type"] = get_content_type(file)
            validated_data["size"] = file.size

        document = super().update(instance, validated_data)

        return document
