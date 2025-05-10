def is_amount_positive(method):
    def wrapper(cls, *args, **kwargs):
        amount = kwargs["amount"]
        if amount < 0:
            raise ValueError("Should be positive value")
        return method(cls, *args, **kwargs)

    return wrapper
