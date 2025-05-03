from journal.filters import JournalFilter
from journal.repository import JournalRepository
from journal.serializers import JournalSerializer
from packages.controllers import ReadOnlyModelSetController


class JournalViewSet(ReadOnlyModelSetController):

    queryset = JournalRepository.optimize()
    serializer_class = JournalSerializer
    filterset_class = JournalFilter
