from packages.controllers import ModelSetController
from tags.filters import TagFilter
from tags.repository import TagRepository
from tags.serializers import TagSerializer


class TagViewSet(ModelSetController):

    queryset = TagRepository.optimize()
    serializer_class = TagSerializer
    filterset_class = TagFilter
    pagination_class = None
