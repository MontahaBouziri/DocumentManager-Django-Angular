# Generated by Django 4.0.4 on 2022-04-13 16:14

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='TypeDocument',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Nom_type', models.CharField(max_length=50)),
                ('nbre_pièces', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Document',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('réf', models.CharField(max_length=10)),
                ('Etat_archive', models.TextField(max_length=10)),
                ('nbr_boites', models.IntegerField()),
                ('type_copie', models.CharField(max_length=10)),
                ('num_contact', models.IntegerField()),
                ('Date_contact', models.DateField()),
                ('Date_depot', models.DateTimeField(auto_now_add=True)),
                ('Date_envoie', models.DateField()),
                ('Date_gestion', models.DateField()),
                ('Date_retour', models.DateField()),
                ('Année_gestion', models.DateField()),
                ('commentaire', models.TextField(max_length=10)),
                ('Clé_type', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='documents', to='Cdc_Documents.typedocument')),
            ],
        ),
    ]
