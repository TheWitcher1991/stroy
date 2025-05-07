from django.db.models import QuerySet

from journal.models import Journal
from packages.mixins import AbstractRepository


class BuildJournalRepository(AbstractRepository[Journal]):
    model = Journal
    cache_prefix = "journal"

    def optimize(self) -> QuerySet[Journal]:
        return self.model.objects.select_related("document", "user")


JournalRepository = BuildJournalRepository()
