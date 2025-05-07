from guards.filters import GuardFilter
from guards.repository import GuardRepository
from guards.serializers import GuardSerializer
from packages.caching import CachedSetMixin
from packages.controllers import ModelSetController


class GuardViewSet(CachedSetMixin, ModelSetController):

    queryset = GuardRepository.optimize()
    serializer_class = GuardSerializer
    filterset_class = GuardFilter
    pagination_class = None
    tag_cache = GuardRepository.cache_prefix
