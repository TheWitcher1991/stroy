from django.contrib import admin
from django.contrib.admin import ModelAdmin

from business.models import DepartmentWallet, Invoice


@admin.register(DepartmentWallet)
class DepartmentWalletAdmin(ModelAdmin):
    list_display = (
        "department",
        "balance",
    )
    date_hierarchy = "created_at"


@admin.register(Invoice)
class InvoiceAdmin(ModelAdmin):
    list_display = ("id", "department", "payer_type", "amount")
    list_filter = (
        "is_paid",
        "target",
        "payer_type",
        "payment_method",
    )
    raw_id_fields = ("department",)
    readonly_fields = (
        "description",
        "created_at",
        "updated_at",
        "payment_url",
    )
    date_hierarchy = "created_at"
