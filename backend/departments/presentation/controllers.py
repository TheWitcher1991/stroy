from rest_framework import status
from rest_framework.response import Response

from departments.application.commands.create_department.create_department_command import CreateDepartmentCommand
from departments.contracts.department_tag_request import CreateDepartmentRequest
from departments.presentation.providers import create_department_command
from departments.presentation.serializers import CreateDepartmentSerializer
from packages.framework import BaseController


class DepartmentController(BaseController):

    serializer_class = CreateDepartmentSerializer

    def post(self, *args, **kwargs):
        serializer = self.get_serializer(data=self.request.data)

        serializer.is_valid(raise_exception=True)

        department_request = CreateDepartmentRequest(**serializer.validated_data)

        command = CreateDepartmentCommand(name=department_request.name)

        result = create_department_command.handle(command)

        if result.is_failure:
            return Response(result.to_response(), status=status.HTTP_400_BAD_REQUEST)

        return Response(result.value, status=status.HTTP_201_CREATED)
