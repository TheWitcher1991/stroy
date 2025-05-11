from django.db.models.signals import pre_save
from django.dispatch import receiver

from business.models import Invoice
from business.repositories.invoice import InvoiceRepository
from business.repositories.subscription import SubscriptionRepository
from business.types import InvoiceTarget


@receiver(pre_save, sender=Invoice)
def invoice_pre_save_signal(sender, instance: Invoice, **kwargs):
    try:
        old_instance = InvoiceRepository.get_by_id(instance.pk)
        if instance.is_paid != old_instance.is_paid and instance.target == InvoiceTarget.PAYMENT:
            SubscriptionRepository.subscribe(instance.department)
    except InvoiceRepository.DoesNotExist:
        pass
