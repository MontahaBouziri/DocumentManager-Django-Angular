from datetime import date
import datetime
from django.db import models
from django.contrib.auth.models import User
# Create your models here.
from rest_framework.authtoken.models import Token


class TypeDocument(models.Model):
    id = models.AutoField(primary_key=True)
    Nom_type = models.CharField(max_length=50)
    nbre_pieces = models.IntegerField()
    def __str__(self):
        return self.Nom_type



class Service(models.Model):
    id = models.AutoField(primary_key=True)
    nom_service = models.CharField(max_length=50)
    num_serv = models.IntegerField()
    nbre_emp = models.IntegerField()
    type = models.CharField(max_length=50)
    def __str__(self):
        return self.nom_service

class Administration(models.Model):
    id = models.AutoField(primary_key=True)
    nom_admin = models.CharField(max_length=50)
    type_admin = models.CharField(max_length=50)
    def __str__(self):
        return self.nom_admin


class Document(models.Model):
    id = models.AutoField(primary_key=True)
    ref = models.CharField(max_length=10)# ici j'ai enlevé (max_length=10)
    Etat_archive =  models.TextField(max_length=10)
    nbr_boites= models.IntegerField()
    type_copie = models.CharField(max_length=10)
    num_contact = models.IntegerField()
    commentaire = models.TextField(max_length=10)
    Date_depot = models.DateTimeField(auto_now_add=True)
    Annee_gestion = models.DateField(default=date.today)

    id_type = models.ForeignKey(TypeDocument,related_name='documents',on_delete=models.CASCADE)
    id_serv = models.ForeignKey(Service,related_name='service',on_delete=models.CASCADE)
    id_admin = models.ForeignKey(Administration,related_name='administration',on_delete=models.CASCADE,default=2)

    def __str__(self):
        return self.ref

class BureauOrdre(models.Model):
    id = models.AutoField(primary_key=True)
    nom_Bureau = models.CharField(max_length=50)
    num_Bureau = models.IntegerField()
    def __str__(self):
        return self.nom_Bureau