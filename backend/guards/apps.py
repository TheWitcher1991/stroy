from django.apps import AppConfig


class GuardsConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "guards"
    label = "guards"

    def ready(self):
        import guards.signals
