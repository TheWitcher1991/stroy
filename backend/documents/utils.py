from django.db.models import Max, functions


def generate_doc_number(project):
    base_tag = project.tag.upper()

    from documents.models import Document

    max_number = (
        Document.objects.filter(project__tag=base_tag)
        .annotate(seq_part=functions.Substr("doc_number", len(base_tag) + 2))
        .aggregate(max_seq=Max("seq_part"))
    )["max_seq"]

    if max_number and max_number.isdigit():
        new_seq = int(max_number) + 1
    else:
        new_seq = 1

    return f"{base_tag}-{new_seq:03d}"
