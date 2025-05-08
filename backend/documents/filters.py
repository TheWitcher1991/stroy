from documents.models import Document
from packages.mixins import BaseFilterSet


class DocumentFilter(BaseFilterSet):

    class Meta:
        model = Document
        fields = ("title",)
