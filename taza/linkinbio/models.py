from django.db import models


'''
The Model will determine how the list items are stored in the database
item_display_text: {} with a maximum length of 200 characters.
item_type:         {} with a maximum length of 200 characters.
item_contents:     {}
'''

class listItems(models.Model):
    item_display_text = models.CharField(max_length=200)
    item_type = models.CharField(max_length=200)
    item_contents = models.JSONField()

    #create a string representation of the item_display_text 
    def __str__(self):
        return self.item_display_text
'''
Note that every time you make changes to the models.py file, 
we will need to make migrations. Use the below command to do so:

python manage.py makemigrations

Then apply all migrations

python manage.py migrate
'''