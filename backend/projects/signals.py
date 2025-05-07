from django.db.models.signals import post_delete, post_save
from django.dispatch import receiver

from documents.repository import DocumentRepository
from projects.models import Project


@receiver(post_save, sender=Project)
@receiver(post_delete, sender=Project)
def project_signal(sender, instance: Project, **kwargs):
    DocumentRepository.delete_global_cache()
