from django.db.models.signals import post_delete, post_save
from django.dispatch import receiver

from documents.repository import DocumentRepository
from tags.models import Tag


@receiver(post_save, sender=Tag)
@receiver(post_delete, sender=Tag)
def tag_signal(sender, instance: Tag, **kwargs):
    DocumentRepository.delete_global_cache()
