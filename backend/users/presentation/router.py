from rest_framework.routers import DefaultRouter

from users.presentation.controllers.auth_controller import AuthController

router = DefaultRouter()
router.register(r"auth", AuthController, basename="auth")

app_name = "users"

urlpatterns = []

urlpatterns += router.urls
