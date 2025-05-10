from django.db.models import QuerySet

from documents.models import Document, DocumentPermission, DocumentVersion
from packages.mixins import AbstractRepository


class BuildDocumentRepository(AbstractRepository[Document]):
    model = Document
    cache_prefix = "documents"

    def optimize(self) -> QuerySet[Document]:
        return self.model.objects.prefetch_related("versions", "permissions").select_related("project", "author", "tag")


class BuildDocumentVersionRepository(AbstractRepository[DocumentVersion]):
    model = DocumentVersion
    cache_prefix = "versions"


class BuildDocumentPermissionRepository(AbstractRepository[DocumentPermission]):
    model = DocumentPermission
    cache_prefix = "permissions"

    def optimize(self) -> QuerySet[DocumentPermission]:
        return self.model.objects.select_related("document", "user", "guard")


DocumentRepository = BuildDocumentRepository()
DocumentVersionRepository = BuildDocumentVersionRepository()
DocumentPermissionRepository = BuildDocumentPermissionRepository()
