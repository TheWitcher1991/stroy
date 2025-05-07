from django.db.models.signals import pre_save, post_delete
from django.dispatch import receiver

from documents.models import Document
from documents.repository import DocumentRepository, DocumentVersionRepository
from journal.repository import JournalRepository
from journal.types import JournalAction


@receiver(post_delete, sender=Document)
def document_post_delete_signal(sender, instance: Document, **kwargs):
    JournalRepository.create(
        action=JournalAction.DELETE,
        document=instance,
        user=instance.author,
    )


@receiver(pre_save, sender=Document)
def document_pre_save_signal(sender, instance: Document, **kwargs):
    try:
        document = DocumentRepository.get_by_id(instance.pk)
        JournalRepository.create(
            action=JournalAction.UPDATE,
            document=document,
            user=document.author
        )
    except DocumentRepository.DoesNotExist:
        JournalRepository.create(
            action=JournalAction.CREATE,
            document=instance,
            user=instance.author,
        )


@receiver(pre_save, sender=Document)
def document_version_signal(sender, instance: Document, **kwargs):
    if instance.file:
        try:
            old_instance = DocumentRepository.get_by_id(instance.pk)
            if instance.file.name != old_instance.file.name:
                DocumentVersionRepository.create(
                    version=old_instance.version_number,
                    file=old_instance.file,
                    modified_by=old_instance.author,
                    document=old_instance,
                )

                instance.version_number = old_instance.version_number + 1
        except DocumentRepository.DoesNotExist:
            pass
