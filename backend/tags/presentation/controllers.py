from rest_framework.response import Response

from packages.framework import BaseController
from tags.applicantion.commands.create_tag.create_tag_command import CreateTagCommand
from tags.contracts.create_tag_request import CreateTagRequest
from tags.presentation.provider import create_tag_command
from tags.presentation.serializers import CreateTagSerializer


class TagController(BaseController):

    serializer_class = CreateTagSerializer

    def post(self, *args, **kwargs):
        serializer = self.get_serializer(data=self.request.data)

        serializer.is_valid(raise_exception=True)

        tag_request = CreateTagRequest(**serializer.validated_data)

        command = CreateTagCommand(name=tag_request.name)

        result = create_tag_command.handle(command)

        return Response(result)
