# Generated by Django 4.0.4 on 2022-04-13 16:52

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Cdc_Documents', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='document',
            name='Année_gestion',
            field=models.DateField(default=datetime.date.today),
        ),
        migrations.AlterField(
            model_name='document',
            name='Date_envoie',
            field=models.DateField(default=datetime.date.today),
        ),
        migrations.AlterField(
            model_name='document',
            name='Date_gestion',
            field=models.DateField(default=datetime.date.today),
        ),
        migrations.AlterField(
            model_name='document',
            name='Date_retour',
            field=models.DateField(default=datetime.date.today),
        ),
    ]
