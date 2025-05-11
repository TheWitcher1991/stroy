from django.urls import path

from . import views

app_name = "business"

urlpatterns = [
    path("business/subscription/", views.SubscriptionController.as_view(), name="business-subscription"),
    path("business/wallet/", views.WalletController.as_view(), name="business-wallet"),
    path("business/deposit/", views.DepositController.as_view(), name="business-deposit"),
    path("business/webhooks/", views.WebhookController.as_view(), name="business-webhooks"),
]
