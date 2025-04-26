from datetime import datetime

from rest_framework.response import Response
from rest_framework.status import is_success

from packages.kernel import Error


class ResultResponse(Response):
    def __init__(self, data=None, status=None, headers=None, exception=False):
        is_error = not is_success(status)
        time_gen = datetime.utcnow().isoformat()
        error_list = []
        result = data if not is_error else None

        if is_error and isinstance(data, dict):
            for field, errors in data.items():
                if isinstance(errors, list):
                    for error in errors:
                        error_list.append(
                            Error(
                                code=str(error.code) if hasattr(error, "code") else "unknown",
                                message=str(error),
                                type=field,
                            )
                        )
                else:
                    error_list.append(Error(code="unknown", message=str(errors), type=field))

        formatted_data = {
            "result": result,
            "error_list": error_list,
            "is_error": is_error,
            "time_generated ": time_gen,
        }

        super().__init__(formatted_data, status=status, headers=headers, exception=exception)
