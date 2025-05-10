from django_filters.rest_framework import CharFilter

from documents.models import Document, DocumentPermission
from packages.mixins import BaseFilterSet


class DocumentFilter(BaseFilterSet):

    class Meta:
        model = Document
        fields = ("title",)


class DocumentPermissionFilter(BaseFilterSet):

    class Meta:
        model = DocumentPermission
        fields = ("document_id", "user_id")
