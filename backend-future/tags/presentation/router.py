from rest_framework.routers import DefaultRouter

from tags.presentation.controllers import TagController

router = DefaultRouter()
router.register(r"tags", TagController, basename="tags")

app_name = "tags"

urlpatterns = []

urlpatterns += router.urls
