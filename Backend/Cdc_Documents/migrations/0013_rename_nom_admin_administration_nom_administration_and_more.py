# Generated by Django 4.0.4 on 2022-05-25 15:30

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Cdc_Documents', '0012_administration'),
    ]

    operations = [
        migrations.RenameField(
            model_name='administration',
            old_name='nom_admin',
            new_name='nom_administration',
        ),
        migrations.RenameField(
            model_name='administration',
            old_name='type_admin',
            new_name='type_administration',
        ),
    ]
