from config.settings import ADMIN_ACTIONS
from documents.filters import DocumentFilter, DocumentPermissionFilter
from documents.repository import DocumentPermissionRepository, DocumentRepository
from documents.serializers import DocumentActionSerializer, DocumentPermissionSerializer, DocumentSerializer
from packages.caching import CachedSetMixin
from packages.controllers import ModelSetController


class DocumentViewSet(CachedSetMixin, ModelSetController):

    queryset = DocumentRepository.optimize()
    serializer_class = DocumentSerializer
    filterset_class = DocumentFilter
    tag_cache = DocumentRepository.cache_prefix

    def get_serializer_class(self):
        if self.action in ADMIN_ACTIONS:
            return DocumentActionSerializer
        return super().get_serializer_class()


class DocumentPermissionViewSet(CachedSetMixin, ModelSetController):

    queryset = DocumentPermissionRepository.optimize()
    serializer_class = DocumentPermissionSerializer
    filterset_class = DocumentPermissionFilter
    tag_cache = DocumentPermissionRepository.cache_prefix
