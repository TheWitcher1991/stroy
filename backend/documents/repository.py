from django.db.models import QuerySet

from documents.models import Document
from packages.mixins import AbstractRepository


class BuildDocumentRepository(AbstractRepository[Document]):
    model = Document

    def optimize(self) -> QuerySet[Document]:
        return self.model.objects.prefetch_related("versions", "permissions").select_related("project", "author", "tag")


DocumentRepository = BuildDocumentRepository()
