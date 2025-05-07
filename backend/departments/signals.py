from django.db.models.signals import post_delete, post_save
from django.dispatch import receiver

from departments.models import Department
from documents.repository import DocumentRepository
from users.repository import UserRepository


@receiver(post_save, sender=Department)
@receiver(post_delete, sender=Department)
def department_signal(sender, instance: Department, **kwargs):
    DocumentRepository.delete_global_cache()
    UserRepository.delete_global_cache()
