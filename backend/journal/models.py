from packages.abstract import AbstractModel
from packages.utils import t


class Journal(AbstractModel):

    class Meta:
        verbose_name = t("Журнал")
        verbose_name_plural = t("Журнал")
