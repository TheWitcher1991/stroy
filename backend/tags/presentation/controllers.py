from rest_framework import status
from rest_framework.decorators import action
from rest_framework.response import Response

from packages.framework import BaseSetController
from tags.application.commands.create_tag.create_tag_command import CreateTagCommand
from tags.application.commands.delete_tag.delete_tag_command import DeleteTagCommand
from tags.application.commands.update_tag.update_tag_command import UpdateTagCommand
from tags.presentation.providers import create_tag_command, delete_tag_command, update_tag_command
from tags.presentation.serializers import CreateTagSerializer, UpdateTagSerializer


class TagController(BaseSetController):

    @action(methods=["post"], detail=False)
    def add_tag(self, *args, **kwargs):
        data = self.is_valid(CreateTagSerializer)

        command = CreateTagCommand(name=data.get("name"), department_id=data.get("department"))

        result = create_tag_command.handle(command)

        if result.is_failure:
            return Response(result.to_response(), status=status.HTTP_400_BAD_REQUEST)

        return Response(result.value, status=status.HTTP_201_CREATED)

    @action(methods=["put", "patch"], detail=False)
    def update_tag(self, *args, **kwargs):
        data = self.is_valid(UpdateTagSerializer)

        command = UpdateTagCommand(tag_id=self.kwargs["id"], name=data.get("name"))

        result = update_tag_command.handle(command)

        if result.is_failure:
            return Response(result.to_response(), status=status.HTTP_400_BAD_REQUEST)

        return Response(result.value, status=status.HTTP_201_CREATED)

    @action(methods=["delete"], detail=False)
    def delete_tag(self, *args, **kwargs):
        command = DeleteTagCommand(self.kwargs["id"])

        result = delete_tag_command.handle(command)

        if result.is_failure:
            return Response(result.to_response(), status=status.HTTP_400_BAD_REQUEST)

        return Response(result.value, status=status.HTTP_200_OK)
