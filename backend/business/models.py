from decimal import Decimal

from django.core.validators import MinValueValidator
from django.db import models, transaction
from django.utils import timezone
from rest_framework.generics import get_object_or_404

from business.types import InvoiceTarget, PayerType, PaymentMethod
from config.settings import CHAR_MAX_LENGTH, CHAR_SM_LENGTH
from packages.abstract import AbstractModel
from packages.decorators import is_amount_positive
from packages.utils import decimal_to_words, t


class DepartmentSubscription(models.Model):
    start_date = models.DateField(t("Дата начала"))
    end_date = models.DateField(t("Дата окончания"))
    is_active = models.BooleanField(t("Активно"), default=True)
    auto_pay = models.BooleanField(t("Автоплатеж"), default=False)
    department = models.ForeignKey(to="departments.Department", on_delete=models.CASCADE, related_name="subscriptions")

    class Meta:
        verbose_name = t("Подписка")
        verbose_name_plural = t("Подписки")

    def __str__(self):
        return f"{self.department} - {self.start_date}-{self.end_date}"


class DepartmentWallet(AbstractModel):
    balance = models.DecimalField(
        t("Остаток средств"),
        max_digits=10,
        decimal_places=2,
        default=0,
        validators=[MinValueValidator(0, message=t("Сумма не может быть отрицательной"))],
    )
    department = models.OneToOneField(to="departments.Department", on_delete=models.CASCADE, related_name="wallet")

    class Meta:
        verbose_name = t("Баланс отдела")
        verbose_name_plural = t("Балансы отделов")

    def __str__(self):
        return f"{self.department} - {self.balance}"

    @classmethod
    @is_amount_positive
    def deposit(cls, *, pk: int, amount: Decimal):
        with transaction.atomic():
            balance = get_object_or_404(cls.objects.select_for_update(), pk=pk)
            balance.balance += amount
            balance.save()
        return balance

    @classmethod
    @is_amount_positive
    def withdraw(cls, *, pk: int, amount: Decimal):
        with transaction.atomic():
            balance = get_object_or_404(cls.objects.select_for_update(), pk=pk)
            balance.balance -= amount
            balance.save()
        return balance


class Invoice(AbstractModel):
    payment_id = models.CharField(t("ID платежа YooKassa"), max_length=255, null=True, blank=True)
    payment_url = models.URLField(t("Ссылка на оплату"), blank=True, null=True)
    payment_method = models.CharField(
        t("Способ оплаты"),
        choices=PaymentMethod.choices,
        max_length=CHAR_SM_LENGTH,
        blank=True,
        null=True,
    )
    payer_type = models.CharField(
        t("Тип плательщика"),
        choices=PayerType.choices,
        max_length=CHAR_SM_LENGTH,
    )
    target = models.CharField(
        t("Цель оплаты"),
        choices=InvoiceTarget.choices,
        max_length=CHAR_SM_LENGTH,
    )
    description = models.CharField(t("Назначение платежа"), max_length=CHAR_MAX_LENGTH, null=True, blank=True)
    amount = models.DecimalField(
        verbose_name=t("Сумма оплаты"),
        default=0,
        max_digits=10,
        decimal_places=2,
        null=True,
        blank=True,
    )
    is_paid = models.BooleanField(t("Оплачен"), default=False)
    expires_at = models.DateTimeField(
        t("Дата истечения срока действия"),
        blank=True,
        null=True,
    )
    captured_at = models.DateTimeField(
        t("Дата оплаты счета"),
        blank=True,
        null=True,
    )
    department = models.ForeignKey(to="departments.Department", on_delete=models.CASCADE, related_name="invoices")

    class Meta:
        verbose_name = t("Счет")
        verbose_name_plural = t("Счета")

    def __str__(self):
        return f"{self.department} - {self.payment_id}"

    @property
    def amount_in_words(self):
        return decimal_to_words(self.amount)

    @property
    def is_expired(self):
        return self.expires_at and self.expires_at < timezone.now()
