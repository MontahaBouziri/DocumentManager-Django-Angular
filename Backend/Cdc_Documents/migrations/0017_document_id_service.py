# Generated by Django 4.0.4 on 2022-06-03 12:11

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Cdc_Documents', '0016_rename_année_gestion_document_annee_gestion'),
    ]

    operations = [
        migrations.AddField(
            model_name='document',
            name='id_service',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='service', to='Cdc_Documents.service'),
        ),
    ]
