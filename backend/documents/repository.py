from django.db.models import QuerySet

from documents.models import Document, DocumentVersion
from packages.mixins import AbstractRepository


class BuildDocumentRepository(AbstractRepository[Document]):
    model = Document

    def optimize(self) -> QuerySet[Document]:
        return self.model.objects.prefetch_related("versions", "permissions").select_related("project", "author", "tag")


class BuildDocumentVersionRepository(AbstractRepository[DocumentVersion]):
    model = DocumentVersion


DocumentRepository = BuildDocumentRepository()
DocumentVersionRepository = BuildDocumentVersionRepository()
