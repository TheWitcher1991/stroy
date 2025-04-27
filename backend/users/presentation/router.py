from django.urls import path

from users.presentation.controllers import LoginUserController, SignupUserController

app_name = "users"

urlpatterns = [
    path("login/", LoginUserController.as_view(), name="login"),
    path("signup/", SignupUserController.as_view(), name="signup"),
]
