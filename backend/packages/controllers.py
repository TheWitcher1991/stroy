from django.utils.functional import cached_property
from rest_framework import generics, mixins, viewsets
from rest_framework.permissions import IsAuthenticated

from authorization.backends import APIAuthentication
from packages.mixins import AllowAnyMixin


class Controller:

    @cached_property
    def user(self):
        return self.request.user

    def get_queryset(self):
        queryset = super().get_queryset()

        if self.user.is_authenticated and hasattr(queryset.model, "department"):
            queryset = queryset.filter(department=self.user.department)

        return queryset


class APIController(Controller, generics.GenericAPIView):
    pass


class APISetController(Controller, viewsets.ViewSetMixin, generics.GenericAPIView):
    pass


class AnonymousController(AllowAnyMixin, APIController):
    pass


class BaseController(APIController):
    permission_classes = (IsAuthenticated,)
    authentication_classes = (APIAuthentication,)


class BaseSetController(Controller, APISetController):
    permission_classes = (IsAuthenticated,)
    authentication_classes = (APIAuthentication,)


class ReadOnlyModelSetController(mixins.RetrieveModelMixin, mixins.ListModelMixin, BaseSetController):
    pass


class ModelSetController(
    mixins.CreateModelMixin,
    mixins.RetrieveModelMixin,
    mixins.UpdateModelMixin,
    mixins.DestroyModelMixin,
    mixins.ListModelMixin,
    BaseSetController,
):
    pass


class CreateController(mixins.CreateModelMixin, BaseController):
    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)


class ListController(mixins.ListModelMixin, BaseController):
    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)


class RetrieveController(mixins.RetrieveModelMixin, BaseController):
    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)


class DestroyController(mixins.DestroyModelMixin, BaseController):
    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)


class UpdateController(mixins.UpdateModelMixin, BaseController):
    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def patch(self, request, *args, **kwargs):
        return self.partial_update(request, *args, **kwargs)


class ListCreateController(mixins.ListModelMixin, mixins.CreateModelMixin, BaseController):
    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)


class RetrieveUpdateController(mixins.RetrieveModelMixin, mixins.UpdateModelMixin, BaseController):
    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def patch(self, request, *args, **kwargs):
        return self.partial_update(request, *args, **kwargs)


class RetrieveDestroyController(mixins.RetrieveModelMixin, mixins.DestroyModelMixin, BaseController):
    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)


class RetrieveUpdateDestroyController(
    mixins.RetrieveModelMixin, mixins.UpdateModelMixin, mixins.DestroyModelMixin, BaseController
):
    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def patch(self, request, *args, **kwargs):
        return self.partial_update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)
