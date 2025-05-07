from journal.filters import JournalFilter
from journal.repository import JournalRepository
from journal.serializers import JournalSerializer
from packages.caching import CachedSetMixin
from packages.controllers import ReadOnlyModelSetController


class JournalViewSet(CachedSetMixin, ReadOnlyModelSetController):

    queryset = JournalRepository.optimize()
    serializer_class = JournalSerializer
    filterset_class = JournalFilter
    tag_cache = JournalRepository.cache_prefix
