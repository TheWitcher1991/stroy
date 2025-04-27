from django.db import transaction

from packages.abstractions import AbstractUnitOfWork


class UnitOfWork(AbstractUnitOfWork):
    def __init__(self):
        self._transaction = None

    def __enter__(self):
        self.begin()
        return self

    def __exit__(self, exc_type, exc_value, traceback):
        if exc_type:
            self.rollback()
        else:
            self.commit()

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
