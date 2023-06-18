from django.urls import path, include
from rest_framework import routers
from rest_framework.documentation import include_docs_urls
from taskpy import views

router = routers.DefaultRouter()
router.register(r'tasks', views.TaskView, 'tasks')

urlpatterns = [
    path("api/", include(router.urls)),
    path("doc/", include_docs_urls(title="Taskpy API"))
    ]
