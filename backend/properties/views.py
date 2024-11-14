# properties/views.py
from django.shortcuts import render, redirect
from rest_framework.response import Response

from .models import Property
from .forms import PropertyForm
from .serializers import PropertySerializer
from rest_framework.decorators import api_view



@api_view(['GET'])
def property_list(request):
    properties = Property.objects.all()
    serializer = PropertySerializer(properties, many=True)
    return Response(serializer.data)

def property_create(request):
    if request.method == 'POST':
        form = PropertyForm(request.POST)
        if form.is_valid():
            form.save()  # Save the new property to the database
            return redirect('property_list')  # Redirect to the properties list
    else:
        form = PropertyForm()  # Display an empty form
    return render(request, 'property_create.html', {'form': form})


def home(request):
        return render(request, 'home.html')
