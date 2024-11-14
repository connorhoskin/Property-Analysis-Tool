# properties/views.py
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Property
from .serializers import PropertySerializer
from django.views.decorators.csrf import csrf_exempt

@api_view(['GET'])
def property_list(request):
    properties = Property.objects.all()
    serializer = PropertySerializer(properties, many=True)
    return Response(serializer.data)


@csrf_exempt
@api_view(['POST'])
def property_create(request):
    serializer = PropertySerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)

