# Generated by Django 4.1.5 on 2023-02-25 00:00

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('clicks', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='clicks',
            name='component',
            field=models.CharField(default=django.utils.timezone.now, max_length=50),
            preserve_default=False,
        ),
    ]
