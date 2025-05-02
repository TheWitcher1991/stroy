from guards.filters import GuardFilter
from guards.repository import GuardRepository
from guards.serializers import GuardSerializer
from packages.controllers import ModelSetController


class GuardViewSet(ModelSetController):

    queryset = GuardRepository.optimize()
    serializer_class = GuardSerializer
    filterset_class = GuardFilter
    pagination_class = None
