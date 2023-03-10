# import serializers from the REST framework
from rest_framework import serializers

# import the Clicks data model
from .models import Clicks

# create a serializer class
class ClicksSerializer(serializers.ModelSerializer):

	# create a meta class
	class Meta:
		model = Clicks
		fields = ('id', 'user_ipv4','user_city','component')
