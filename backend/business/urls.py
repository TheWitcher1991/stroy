from django.urls import path
from rest_framework import routers

from . import views

app_name = "business"

router = routers.SimpleRouter()

router.register(r"business/payments", views.InvoiceViewSet, basename="business/payments")

urlpatterns = [
    path("business/subscription/", views.SubscriptionController.as_view(), name="business-subscription"),
    path("business/wallet/", views.WalletController.as_view(), name="business-wallet"),
    path("business/deposit/", views.DepositController.as_view(), name="business-deposit"),
    path("business/webhooks/", views.WebhookController.as_view(), name="business-webhooks"),
]

urlpatterns += router.urls
