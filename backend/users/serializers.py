from rest_framework import serializers

from users.models import User


class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"


class UserSerializer(serializers.ModelSerializer):
    documents = serializers.SerializerMethodField()
    guard = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = "__all__"
        read_only_fields = ("id", "department", "created_at", "updated_at")

    def get_documents(self, obj):
        from documents.serializers import DocumentSerializer

        return DocumentSerializer(obj.documents.all(), many=True, context=self.context).data

    def get_guard(self, obj):
        from guards.serializers import GuardSerializer

        return GuardSerializer(obj.guard, context=self.context).data

    def create(self, validated_data):
        validated_data["department"] = self.context["request"].user.department

        user = super().create(validated_data)

        return user
