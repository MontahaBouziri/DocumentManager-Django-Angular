# Generated by Django 4.0.4 on 2022-06-03 09:38

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Cdc_Documents', '0015_document_année_gestion_document_date_depot'),
    ]

    operations = [
        migrations.RenameField(
            model_name='document',
            old_name='Année_gestion',
            new_name='Annee_gestion',
        ),
    ]
