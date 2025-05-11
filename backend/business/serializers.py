from django.db import transaction
from rest_framework import serializers

from business.models import DepartmentSubscription, DepartmentWallet, Invoice
from business.repositories.invoice import InvoiceRepository
from business.types import PayerType, PaymentMethod
from packages.utils import t, userFromContext


class SubscriptionSerializer(serializers.ModelSerializer):

    class Meta:
        model = DepartmentSubscription
        fields = "_all__"


class WalletSerializer(serializers.ModelSerializer):

    class Meta:
        model = DepartmentWallet
        fields = ("id", "balance", "department")
        read_only_fields = ("id", "balance", "department")


class InvoiceWebhookSerializer(serializers.Serializer):
    type = serializers.CharField()
    event = serializers.CharField()
    object = serializers.DictField()


class DepositSerializer(serializers.ModelSerializer):
    department = serializers.IntegerField(write_only=True)
    amount = serializers.DecimalField(write_only=True, max_digits=10, decimal_places=2)
    payment_method = serializers.ChoiceField(write_only=True, choices=PaymentMethod.choices)
    payer_type = serializers.ChoiceField(write_only=True, choices=PayerType.choices)
    confirmation_url = serializers.URLField(read_only=True)

    class Meta:
        model = Invoice
        fields = ("payer_type", "payment_method", "amount", "confirmation_url")

    @transaction.atomic
    def create(self, validated_data):
        user = userFromContext(self.context)

        department = validated_data.get("department")

        if department != user.department:
            raise serializers.ValidationError(t("Вы не можете пополнить счёт чужого подразделения"))

        invoice = InvoiceRepository.create_invoice(validated_data)

        return {"confirmation_url": invoice.payment_url}
