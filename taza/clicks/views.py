from django.shortcuts import render

# import view sets from the REST framework
from rest_framework import viewsets

# import the ClicksSerializer from the serializer file
from .serializers import ClicksSerializer

# import the Clicks model from the models file
from .models import Clicks

# create a class for the Clicks model viewsets
class ClicksView(viewsets.ModelViewSet):

	# create a serializer class and
	# assign it to the ClicksSerializer class
	serializer_class = ClicksSerializer

	# define a variable and populate it
	# with the Clicks list objects
	queryset = Clicks.objects.all()
