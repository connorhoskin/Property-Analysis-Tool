# properties/urls.py
from django.urls import path
from .views import property_list, property_create

urlpatterns = [
    path('properties/', property_list, name='properties_page'),  # List of properties
    path('properties/new/', property_create, name='new_property_page'),  # Create new property
]
