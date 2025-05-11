from django.db.models.signals import post_delete, post_save, pre_save
from django.dispatch import receiver

from documents.models import Document
from documents.repository import DocumentRepository, DocumentVersionRepository
from journal.repository import JournalRepository
from journal.types import JournalAction


@receiver(post_delete, sender=Document)
def document_post_delete_signal(sender, instance: Document, **kwargs):
    JournalRepository.create(
        action=JournalAction.DELETE, document=instance, user=instance.author, details=instance.title
    )


@receiver(post_save, sender=Document)
def document_post_save_signal(sender, instance: Document, created, **kwargs):
    JournalRepository.create(
        action=JournalAction.CREATE if created else JournalAction.UPDATE,
        document=instance,
        user=instance.author,
    )


@receiver(pre_save, sender=Document)
def document_version_signal(sender, instance: Document, **kwargs):
    if not instance.file:
        return

    try:
        old_instance = DocumentRepository.get_by_id(instance.pk)
        if instance.file.name != old_instance.file.name:
            DocumentVersionRepository.create(
                version_number=old_instance.version_number,
                file=old_instance.file,
                doc_title=old_instance.title,
                doc_type=old_instance.doc_type,
                content_type=old_instance.content_type,
                size=old_instance.size,
                modified_by=old_instance.author,
                document=instance,
            )

            instance.version_number = old_instance.version_number + 1
    except DocumentRepository.DoesNotExist:
        pass
