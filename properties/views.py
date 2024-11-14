from django.shortcuts import render

from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Property
from .serializers import PropertySerializer

@api_view(['GET', 'POST'])
def property_list(request):
    if request.method == 'GET':
        properties = Property.objects.all()
        serializer = PropertySerializer(properties, many=True)
        return Response(serializer.data)

    if request.method == 'POST':
        serializer = PropertySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)


def home(request):
        return render(request, 'home.html')
