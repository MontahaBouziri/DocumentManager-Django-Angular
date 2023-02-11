from asyncore import read
from dataclasses import fields
from pyexpat import model
from rest_framework import serializers

from .models import *
from django.contrib.auth.models import User
from django.contrib.auth import get_user_model

from django.contrib.auth.models import Permission
from django.contrib.contenttypes.models import ContentType
from django.db.models import Count

#class docSerializer(serializers.ModelSerializer):


class TypeDocumentSerializer (serializers.ModelSerializer):
    #documents = DocumentSerializer(many=True)
    documents = serializers.PrimaryKeyRelatedField(many=True,queryset=Document.objects.all())
    
    
    class Meta: 
        model = TypeDocument
        fields=['id','Nom_type','nbre_pieces','documents'] 


class DocumentSerializer (serializers.ModelSerializer):
    #documents=TypeDocumentSerializer(read_only=True, many=True)
    #nom_type= TypeDocumentSerializer(read_only=True, many=True) #new 
    nom_type = serializers.SerializerMethodField()
    nom_service = serializers.SerializerMethodField()
    nom_admin = serializers.SerializerMethodField()
    
    def get_nom_type(self, obj):
        # Use a try - except block if needed
        return obj.id_type.Nom_type

    def get_nom_service(self, obj):
        # Use a try - except block if needed
        return obj.id_serv.nom_service

    def get_nom_admin(self, obj):
        # Use a try - except block if needed
        return obj.id_admin.nom_admin

   

    class Meta: 
        model = Document
        fields= ['id','ref' ,'Etat_archive' ,'nbr_boites' ,'type_copie' ,'num_contact' ,'commentaire',
        'Date_depot','Annee_gestion','id_type','nom_type','id_serv','nom_service','id_admin','nom_admin',
        ]

 
class ServiceSerializer (serializers.ModelSerializer):
    #documents = DocumentSerializer(many=True)
    #documents = serializers.PrimaryKeyRelatedField(many=True,queryset=Document.objects.all())
        
    class Meta: 
        model = Service
        fields=['id','nom_service','num_serv','nbre_emp','type'] 


class PermissionSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Permission
        fields = ['id','name','content_type_id', 'codename']


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['id','username','password','is_superuser', 'first_name', 'last_name','email']
        extra_kwargs = {"password":{'write_only': True}}


        
class AdministrationSerializer (serializers.ModelSerializer):
        
    class Meta: 
        model = Administration
        fields=['id','nom_admin','type_admin'] 



class BureauOrdreSerializer  (serializers.ModelSerializer):
    class Meta:
        model = BureauOrdre
        fields=['id','nom_Bureau','num_Bureau'] 