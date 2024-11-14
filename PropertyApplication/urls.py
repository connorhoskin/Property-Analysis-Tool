from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),  # This line enables the admin interface at /admin
    path('api/', include('properties.urls')),  # Ensure your app URLs are included as well
]
