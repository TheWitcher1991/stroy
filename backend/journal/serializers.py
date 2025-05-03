from rest_framework import serializers

from documents.serializers import DocumentSerializer
from journal.models import Journal
from users.serializers import AuthorSerializer


class JournalSerializer(serializers.ModelSerializer):
    document = DocumentSerializer(read_only=True)
    user = AuthorSerializer(read_only=True)

    class Meta:
        model = Journal
        fields = "__all__"
