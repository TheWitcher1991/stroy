from packages.controllers import ModelSetController
from projects.filters import ProjectFilter
from projects.repository import ProjectRepository
from projects.serializers import ProjectSerializer
from tags.filters import TagFilter
from tags.repository import TagRepository
from tags.serializers import TagSerializer


class ProjectViewSet(ModelSetController):

    queryset = ProjectRepository.optimize()
    serializer_class = ProjectSerializer
    filterset_class = ProjectFilter
