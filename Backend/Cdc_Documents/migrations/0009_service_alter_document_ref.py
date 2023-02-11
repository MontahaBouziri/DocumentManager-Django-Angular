# Generated by Django 4.0.4 on 2022-05-11 14:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Cdc_Documents', '0008_rename_réf_document_ref'),
    ]

    operations = [
        migrations.CreateModel(
            name='Service',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('nom_service', models.CharField(max_length=50)),
                ('num_serv', models.IntegerField()),
                ('nbre_emp', models.IntegerField()),
                ('type', models.IntegerField()),
            ],
        ),
        migrations.AlterField(
            model_name='document',
            name='ref',
            field=models.IntegerField(),
        ),
    ]