# properties/urls.py
from django.urls import path
from .views import property_list, property_create

urlpatterns = [
    path('', property_list, name='property_list'),  # List properties
    path('properties/new/', property_create, name='property_create'),  # Create a new property
]
