# properties/views.py
from django.shortcuts import render, redirect
from .models import Property
from .forms import PropertyForm

def property_list(request):
    properties = Property.objects.all()  # Fetch all properties from the database
    return render(request, 'properties_list.html', {'properties': properties})

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
