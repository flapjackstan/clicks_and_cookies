from django.shortcuts import render
from .models import listItems
from django.template import loader

# https://docs.djangoproject.com/en/4.1/ref/request-response/#django.http.HttpResponse
from django.http import HttpResponse

def index(request):

    print("REQUEST START")
    print(request.headers)
    print(request.META)

    items = listItems.objects.all()

    template = loader.get_template('linkinbio/index.html')

    context = {
        'items_list': items
    }

    response = HttpResponse(template.render(context, request))

    # print("RESPONSE START")
    # print(response.headers)
    return response