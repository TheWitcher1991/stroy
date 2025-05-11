from enum import Enum

from django.db import models

from packages.utils import t


class InvoiceTarget(models.TextChoices):

    WALLET = "WALLET", t("Пополнение баланса")
    PAYMENT = "PAYMENT", t("Платеж")


class PaymentMethod(models.TextChoices):
    CARD = "bank_card", t("Банковская карта")
    SBERPAY = "sberbank", t("SberPay")
    TPAY = "tinkoff_bank", t("T‑Pay")
    SBP = "sbp", t("СБП (Система быстрых платежей)")
    YOO_MONEY = "yoo_money", t("ЮMoney")
    BALANCE = "balance", t("С лицевого счета")
    CASHLESS = "cashless", t("Безналичная оплата")


class PayerType(models.TextChoices):
    INDIVIDUAL = "INDIVIDUAL", t("Физическое лицо")
    LEGAL = "LEGAL", t("ЮЛ / ИП")


class TransactionType(models.TextChoices):
    DEPOSIT = "DEPOSIT", t("Доход")
    WITHDRAWAL = "WITHDRAWAL", t("Расход")
    TRANSFER = "TRANSFER", t("Перевод средств")


class YookassaVatCode(Enum):
    """
    Коды ставок НДС в Yookassa
    """

    without_vat = 1
    zero_vat = 2
    with_vat = 4


class YookassaSettlementsType(Enum):
    """
    Тип расчета в Yookassa
    """

    cashless = ("cashless",)
    prepayment = ("prepayment",)
    postpayment = ("postpayment",)
    consideration = ("consideration",)


class YookassaPaymentSubject(Enum):
    """
    Признак предмета расчета в Yookassa
    """

    commodity = ("commodity",)
    job = ("job",)
    service = ("service",)
    payment = ("payment",)
    another = ("another",)


class YookassaPaymentMode(Enum):
    """
    Признак способа расчета в Yookassa
    """

    full_prepayment = ("full_prepayment",)
    full_payment = ("full_payment",)


class YookassaPaymentStatus(Enum):
    """
    Статус операции в Yookassa
    """

    pending = ("pending",)
    waiting_for_capture = ("waiting_for_capture",)
    succeeded = ("succeeded",)
    canceled = ("canceled",)
