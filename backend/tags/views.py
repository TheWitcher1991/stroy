from packages.caching import CachedSetMixin
from packages.controllers import ModelSetController
from tags.filters import TagFilter
from tags.repository import TagRepository
from tags.serializers import TagSerializer


class TagViewSet(CachedSetMixin, ModelSetController):

    queryset = TagRepository.optimize()
    serializer_class = TagSerializer
    filterset_class = TagFilter
    pagination_class = None
    tag_cache = TagRepository.cache_prefix
