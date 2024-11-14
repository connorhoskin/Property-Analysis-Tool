from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('properties.urls')),  # Include URLs from the properties app
]

## comment for git push just to see updates the therbe