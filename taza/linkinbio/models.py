from django.db import models

class listItems(models.Model):
    item_display_text = models.CharField(max_length=200)
    item_type = models.CharField(max_length=200)
    item_contents = models.JSONField()

