from django.contrib import admin
from django.contrib.admin import ModelAdmin

from tags.infrastructure.models import Tag


@admin.register(Tag)
class AccountAdmin(ModelAdmin):
    list_display = ("name",)
    search_fields = ("name",)
    ordering = ("-created_at",)
    date_hierarchy = "created_at"
