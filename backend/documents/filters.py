from django_filters.rest_framework import FilterSet

from documents.models import Document


class DocumentFilter(FilterSet):

    class Meta:
        model = Document
        fields = ("title",)
