from django.shortcuts import render
from .models import listItems
from django.template import loader

# import view sets from the REST framework
from rest_framework import viewsets

# import the TodoSerializer from the serializer file
from .serializers import listItemsSerializer

# https://docs.djangoproject.com/en/4.1/ref/request-response/#django.http.HttpResponse
from django.http import HttpResponse

# def index(request):

#     print("REQUEST START")
#     print(request.headers)
#     print(request.META)

#     items = listItems.objects.all()

#     template = loader.get_template('linkinbio/index.html')

#     context = {
#         'items_list': items
#     }

#     response = HttpResponse(template.render(context, request))

#     # print("RESPONSE START")
#     # print(response.headers)
#     return response



# create a class for the Todo model viewsets
class listItemsView(viewsets.ModelViewSet):
 
    # create a serializer class and
    # assign it to the TodoSerializer class
    serializer_class = listItemsSerializer
 
    # define a variable and populate it
    # with the Todo list objects
    queryset = listItems.objects.all()