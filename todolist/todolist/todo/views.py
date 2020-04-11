from django.shortcuts import render

# Create your views here.

from .serializers import *

from rest_framework import viewsets


from .models import *

class TodoViewset(viewsets.ModelViewSet):
    serializer_class = TodoitemSerializer
    queryset = Todoitem.objects.all()