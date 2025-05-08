from django.db.models import IntegerField, Sum
from django.db.models.functions import Cast
from rest_framework.response import Response

from documents.repository import DocumentRepository
from guards.repository import GuardRepository
from packages.controllers import BaseController
from projects.repository import ProjectRepository
from tags.repository import TagRepository
from users.repository import UserRepository


class DepartmentIndicatorController(BaseController):

    def get(self, *args, **kwargs):
        department = self.request.user.department

        documents = DocumentRepository.filter(author__department=department)

        data = {
            "documents": documents.count(),
            "tags": TagRepository.filter(department=department).count(),
            "projects": ProjectRepository.filter(department=department).count(),
            "guards": GuardRepository.filter(department=department).count(),
            "users": UserRepository.filter(department=department).count(),
            "size": round(documents.aggregate(total_size=Sum(Cast("size", IntegerField())))["total_size"], 0) or 0,
        }

        return Response(data)
