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


class BuildDocumentPermissionRepository(AbstractRepository[DocumentVersion]):
    model = DocumentPermission
    cache_prefix = "permissions"


DocumentRepository = BuildDocumentRepository()
DocumentVersionRepository = BuildDocumentVersionRepository()
DocumentPermissionRepository = BuildDocumentPermissionRepository()
