# Generated by Django 4.0.4 on 2022-06-03 19:25

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Cdc_Documents', '0023_alter_document_id_serv'),
    ]

    operations = [
        migrations.AlterField(
            model_name='document',
            name='id_serv',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='service', to='Cdc_Documents.service'),
        ),
    ]
