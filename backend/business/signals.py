from django.db.models.signals import post_delete, post_save, pre_save
from django.dispatch import receiver

from business.models import Invoice
from business.repositories.invoice import InvoiceRepository
from business.repositories.subscription import SubscriptionRepository
from business.services.payment import PaymentService
from business.types import InvoiceTarget


@receiver(pre_save, sender=Invoice)
def invoice_pre_save_signal(sender, instance: Invoice, **kwargs):
    try:
        old_instance = InvoiceRepository.get_by_id(instance.pk)
        if instance.is_paid != old_instance.is_paid and instance.target == InvoiceTarget.PAYMENT:
            SubscriptionRepository.subscribe(instance.department)
    except InvoiceRepository.DoesNotExist:
        pass


@receiver(post_delete, sender=Invoice)
def invoice_post_delete_signal(sender, instance: Invoice, **kwargs):
    try:
        PaymentService.cancel(instance.payment_id)
    except Exception as e:
        pass


@receiver(post_save, sender=Invoice)
@receiver(post_delete, sender=Invoice)
def invoice_signal(sender, instance: Invoice, **kwargs):
    InvoiceRepository.delete_global_cache()
