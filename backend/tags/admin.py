from django.contrib import admin
from django.contrib.admin import ModelAdmin

from tags.models import Tag


@admin.register(Tag)
class TagAdmin(ModelAdmin):
    list_display = ("title",)
    search_fields = ("title",)
    date_hierarchy = "created_at"
