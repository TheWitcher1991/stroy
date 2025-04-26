from django.urls import path

from tags.presentation.controllers import TagController

app_name = 'tags'

urlpatterns = [
    path('tags/', TagController.as_view(), name='tags'),
]
