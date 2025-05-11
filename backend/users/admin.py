from django.contrib import admin
from django.contrib.admin import ModelAdmin, StackedInline

from documents.models import DocumentPermission
from users.models import User


class DocumentPermissionInline(StackedInline):
    model = DocumentPermission
    extra = 1


@admin.register(User)
class UserAdmin(ModelAdmin):
    readonly_fields = ("date_joined", "updated_at", "password")
    list_display = (
        "email",
        "first_name",
        "last_name",
        "role",
    )
    search_fields = ("email", "first_name", "last_name")
    list_filter = ("role",)
    ordering = ("-date_joined",)
    inlines = (DocumentPermissionInline,)
    date_hierarchy = "date_joined"
