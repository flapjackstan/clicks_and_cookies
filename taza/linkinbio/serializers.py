# import serializers from the REST framework
from rest_framework import serializers

# import the listItems data model
from .models import listItems

# create a serializer class
class listItemsSerializer(serializers.ModelSerializer):

	# create a meta class
	class Meta:
		model = listItems
		fields = ('id', 'item_display_text','item_type','item_contents')
