from django.db import transaction
from rest_framework import serializers

from documents.models import Document, DocumentVersion


class DocumentVersionSerializer(serializers.ModelSerializer):

    class Meta:
        model = DocumentVersion
        fields = "__all__"


class DocumentSerializer(serializers.ModelSerializer):
    project = serializers.SerializerMethodField(read_only=True)
    author = serializers.SerializerMethodField(read_only=True)
    tag = serializers.SerializerMethodField(read_only=True)
    versions = DocumentVersionSerializer(many=True, read_only=True)

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


class DocumentActionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Document
        fields = "__all__"

    @transaction.atomic
    def create(self, validated_data):
        pass

    @transaction.atomic
    def update(self, instance, validated_data):
        pass
