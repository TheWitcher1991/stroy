from django.db.models.signals import post_delete, post_save
from django.dispatch import receiver

from journal.models import Journal
from journal.repository import JournalRepository


@receiver(post_save, sender=Journal)
@receiver(post_delete, sender=Journal)
def journal_signal(sender, instance: Journal, **kwargs):
    JournalRepository.delete_global_cache()
