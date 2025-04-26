from rest_framework import status
from rest_framework.exceptions import APIException

from packages.kernel import t


class ModelNotCreatedException(APIException):
    status_code = status.HTTP_400_BAD_REQUEST
    default_detail = t("Not created.")
    default_code = "not_created"


class ModelNotUpdatedException(APIException):
    status_code = status.HTTP_404_NOT_FOUND
    default_detail = t("Not updated.")
    default_code = "not_updated"


class ModelNotDeletedException(APIException):
    status_code = status.HTTP_404_NOT_FOUND
    default_detail = t("Not deleted.")
    default_code = "not_deleted"
