from django.db import transaction
from rest_framework import serializers

from business.models import DepartmentSubscription, DepartmentWallet, Invoice
from business.repositories.invoice import InvoiceRepository
from business.types import InvoiceTarget, PayerType, PaymentMethod
from config.settings import STROY_PLUS_AMOUNT, YOOKASSA_RETURN_URL
from packages.utils import t, userFromContext


class SubscribeSerializer(serializers.Serializer):
    return_url = serializers.URLField(read_only=True)

    class Meta:
        fields = ("return_url",)

    @transaction.atomic
    def create(self, validated_data):
        user = userFromContext(self.context)

        invoice = InvoiceRepository.create_invoice(
            department=user.department,
            payer_type=PayerType.INDIVIDUAL,
            target=InvoiceTarget.PAYMENT,
            payment_method=PaymentMethod.BALANCE,
            amount=STROY_PLUS_AMOUNT,
            payment_url=YOOKASSA_RETURN_URL,
        )

        try:
            InvoiceRepository.capture_invoice(invoice.id)
            return {"return_url": invoice.payment_url}
        except Exception as e:
            raise serializers.ValidationError(t(str(e)))


class SubscriptionSerializer(serializers.ModelSerializer):

    class Meta:
        model = DepartmentSubscription
        fields = "__all__"


class WalletSerializer(serializers.ModelSerializer):

    class Meta:
        model = DepartmentWallet
        fields = ("id", "balance", "department")
        read_only_fields = ("id", "balance", "department")


class InvoiceWebhookSerializer(serializers.Serializer):
    type = serializers.CharField()
    event = serializers.CharField()
    object = serializers.DictField()


class InvoiceSerializer(serializers.ModelSerializer):
    amount_in_words = serializers.SerializerMethodField()
    is_expired = serializers.SerializerMethodField()

    class Meta:
        model = Invoice
        fields = "__all__"

    def get_is_expired(self, obj: Invoice):
        return obj.is_expired

    def get_amount_in_words(self, obj: Invoice):
        return obj.amount_in_words

    def save(self, **kwargs):
        raise serializers.ValidationError(t("Создание счета через API запрещено"))


class DepositSerializer(serializers.ModelSerializer):
    confirmation_url = serializers.URLField(read_only=True)

    class Meta:
        model = Invoice
        fields = ("payer_type", "payment_method", "amount", "confirmation_url", "department", "target")
        extra_kwargs = {
            "payer_type": {"write_only": True},
            "payment_method": {"write_only": True},
            "department": {"write_only": True},
            "target": {"write_only": True},
            "amount": {"write_only": True},
        }

    @transaction.atomic
    def create(self, validated_data):
        user = userFromContext(self.context)

        department = validated_data.get("department")

        if department != user.department:
            raise serializers.ValidationError(t("Вы не можете пополнить счёт чужого подразделения"))

        invoice = InvoiceRepository.create_invoice(**validated_data)

        return {"confirmation_url": invoice.payment_url}
