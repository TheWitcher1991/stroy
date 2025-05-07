from django.db.models.signals import post_delete, post_save
from django.dispatch import receiver

from documents.repository import DocumentRepository
from users.models import User


@receiver(post_save, sender=User)
@receiver(post_delete, sender=User)
def user_signal(sender, instance: User, **kwargs):
    DocumentRepository.delete_global_cache()
