# Generated by Django 4.0.4 on 2022-04-18 16:36

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Cdc_Documents', '0004_remove_document_année_gestion_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='document',
            old_name='Clé_type',
            new_name='id_type',
        ),
    ]
