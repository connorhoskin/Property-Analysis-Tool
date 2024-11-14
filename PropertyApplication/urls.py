from django.contrib import admin
from django.urls import path, include
from properties.views import home

urlpatterns = [
    path('admin/', admin.site.urls),  # This line enables the admin interface at /admin
    path('api/', include('properties.urls')),  # Ensure your app URLs are included as well
    path('', home, name = 'home'), # Route for the home page

]
