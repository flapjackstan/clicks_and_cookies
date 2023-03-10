from django.db import models


'''
The Model will determine how the list items are stored in the database
user_ipv4: {} with a maximum length of 20 characters.
user_city:         {} with a maximum length of 50 characters.
item_contents:     {}
'''

class Clicks(models.Model):
    user_ipv4 = models.CharField(max_length=20)
    user_city = models.CharField(max_length=50)
    component = models.CharField(max_length=50)

    #create a string representation of the user_ipv4 
    def __str__(self):
        return self.user_ipv4
        
'''
Note that every time you make changes to the models.py file, 
we will need to make migrations. Use the below command to do so:

python manage.py makemigrations

Then apply all migrations

python manage.py migrate
'''