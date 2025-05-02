from django_filters.rest_framework import FilterSet

from users.models import User


class UserFilter(FilterSet):

    class Meta:
        model = User
        fields = ("title",)
