from django.contrib import admin

# import the model Clicks
from .models import Clicks

# create a class for the admin-model integration
class ClicksAdmin(admin.ModelAdmin):
 
    # add the fields of the model here
    list_display = ("user_ipv4","user_city","component")


admin.site.register(Clicks,ClicksAdmin)