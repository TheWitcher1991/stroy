from datetime import datetime

from rest_framework.renderers import JSONRenderer

from packages.kernel import Error


class ResultJSONRenderer(JSONRenderer):

    def render(self, data, accepted_media_type=None, renderer_context=None):
        response = renderer_context["response"]
        is_error = not response.status_code // 100 == 2

        result = data if not is_error else None
        error_list = []
        time_gen = datetime.utcnow().isoformat()

        if is_error:
            if isinstance(data, dict):
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

        response_data = {
            "result": result,
            "error_list": error_list,
            "is_error": is_error,
            "time_generated": time_gen,
        }
