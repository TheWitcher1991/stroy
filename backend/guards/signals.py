from django.db.models.signals import post_delete, post_save
from django.dispatch import receiver

from documents.repository import DocumentRepository
from guards.models import Guard
from users.repository import UserRepository


@receiver(post_save, sender=Guard)
@receiver(post_delete, sender=Guard)
def guard_signal(sender, instance: Guard, **kwargs):
    DocumentRepository.delete_global_cache()
    UserRepository.delete_global_cache()
