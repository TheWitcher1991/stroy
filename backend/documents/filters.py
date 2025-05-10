from django_filters.rest_framework import CharFilter

from documents.models import Document, DocumentPermission
from packages.mixins import BaseFilterSet


class DocumentFilter(BaseFilterSet):

    class Meta:
        model = Document
        fields = ("title",)


class DocumentPermissionFilter(BaseFilterSet):
    document_id = CharFilter(field_name="document_id")
    user_id = CharFilter(field_name="user_id")

    class Meta:
        model = DocumentPermission
        fields = ("title",)
