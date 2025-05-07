from packages.caching import CachedSetMixin
from packages.controllers import ModelSetController
from projects.filters import ProjectFilter
from projects.repository import ProjectRepository
from projects.serializers import ProjectSerializer


class ProjectViewSet(CachedSetMixin, ModelSetController):

    queryset = ProjectRepository.optimize()
    serializer_class = ProjectSerializer
    filterset_class = ProjectFilter
    tag_cache = ProjectRepository.cache_prefix
