from django.shortcuts import render
from .models import listItems
from django.template import loader
import sys

# import view sets from the REST framework
from rest_framework import viewsets

# import the TodoSerializer from the serializer file
from .serializers import listItemsSerializer

# https://docs.djangoproject.com/en/4.1/ref/request-response/#django.http.HttpResponse
from django.http import HttpResponse

# create a class for the Todo model viewsets
class listItemsView(viewsets.ModelViewSet):
 
    # create a serializer class and
    # assign it to the TodoSerializer class
    serializer_class = listItemsSerializer
 
    # define a variable and populate it
    # with the Todo list objects
    queryset = listItems.objects.all()

    print("RESPONSE START")

    print(response.__dict__, file=sys.stderr)

    print("RESPONSE END")
    # print(response.headers)
    return response

