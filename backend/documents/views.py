from config.settings import ADMIN_ACTIONS
from documents.filters import DocumentFilter
from documents.repository import DocumentRepository
from documents.serializers import DocumentActionSerializer, DocumentSerializer
from packages.controllers import ModelSetController


class DocumentViewSet(ModelSetController):

    queryset = DocumentRepository.optimize()
    serializer_class = DocumentSerializer
    filterset_class = DocumentFilter

    def get_serializer_class(self):
        if self.action in ADMIN_ACTIONS:
            return DocumentActionSerializer
        return super().get_serializer_class()
