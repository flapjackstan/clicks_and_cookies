from django.contrib import admin

# import the model listItems
from .models import listItems

# create a class for the admin-model integration
class listItemsAdmin(admin.ModelAdmin):
 
    # add the fields of the model here
    list_display = ("item_display_text","item_type","item_contents")


admin.site.register(listItems,listItemsAdmin)