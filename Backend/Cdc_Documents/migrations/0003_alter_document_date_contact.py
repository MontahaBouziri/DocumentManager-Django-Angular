# Generated by Django 4.0.4 on 2022-04-13 16:55

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Cdc_Documents', '0002_alter_document_année_gestion_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='document',
            name='Date_contact',
            field=models.DateField(default=datetime.date.today),
        ),
    ]
