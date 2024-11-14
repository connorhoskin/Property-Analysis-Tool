# backend/PropertyApplication/urls.py
from django.contrib import admin  # Import the correct admin module
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),  # Django's admin site
    path('', include('properties.urls')),  # Include URLs from the properties app
]
