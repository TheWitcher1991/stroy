from packages.mixins import BaseFilterSet
from users.models import User


class UserFilter(BaseFilterSet):

    class Meta:
        model = User
        fields = ("date_joined",)
