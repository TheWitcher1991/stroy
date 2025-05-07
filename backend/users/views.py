from packages.caching import CachedSetMixin
from packages.controllers import ModelSetController
from users.filters import UserFilter
from users.repository import UserRepository
from users.serializers import UserSerializer


class UserViewSet(CachedSetMixin, ModelSetController):

    queryset = UserRepository.optimize()
    serializer_class = UserSerializer
    filterset_class = UserFilter
    tag_cache = UserRepository.cache_prefix
