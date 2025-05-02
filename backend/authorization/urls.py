from django.urls import path

from . import views

app_name = "authorization"

urlpatterns = [
    path(
        "auth/login/",
        views.LoginAPIView.as_view(),
        name="login",
    ),
    path(
        "auth/signup/",
        views.SignupAPIView.as_view(),
        name="signup",
    ),
    path(
        "auth/logout/",
        views.LogoutAPIView.as_view(),
        name="logout",
    ),
    path(
        "auth/refresh/",
        views.RefreshAPIView.as_view(),
        name="refresh",
    ),
]
