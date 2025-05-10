from decimal import Decimal

from django.db import transaction
from django.db.models import QuerySet
from rest_framework.generics import get_object_or_404

from business.models import DepartmentWallet as Wallet
from packages.mixins import AbstractRepository


class WalletRepository(AbstractRepository[Wallet]):
    model = Wallet

    def optimize(self) -> QuerySet[Wallet]:
        return self.model.objects.select_related("department")

    @staticmethod
    def deposit(pk: int, amount: Decimal):
        with transaction.atomic():
            balance = get_object_or_404(Wallet.objects.select_for_update(), pk=pk)
            balance.balance += amount
            balance.save()
        return balance

    @staticmethod
    def withdraw(pk: int, amount: Decimal):
        with transaction.atomic():
            balance = get_object_or_404(Wallet.objects.select_for_update(), pk=pk)
            balance.balance -= amount
            balance.save()
        return balance
