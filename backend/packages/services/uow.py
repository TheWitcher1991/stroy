from django.db import transaction


class UnitOfWork(AbstractUnitOfWork):
    def __init__(self):
        self._transaction = None

    def begin(self):
        self._transaction = transaction.atomic()
        self._transaction.__enter__()

    def commit(self):
        if self._transaction:
            try:
                self._transaction.__exit__(None, None, None)
            finally:
                self._transaction = None

    def rollback(self):
        if self._transaction:
            try:
                self._transaction.__exit__(Exception, Exception("Rollback called"), None)
            finally:
                self._transaction = None
