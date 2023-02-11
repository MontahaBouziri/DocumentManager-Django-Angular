from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt,requires_csrf_token
from rest_framework.parsers import JSONParser
from rest_framework.response import Response
from rest_framework.decorators import api_view, renderer_classes
from rest_framework import viewsets
from django.http.response import JsonResponse

from .models import BureauOrdre, Document, TypeDocument,Service,Administration
#from Backend.Cdc_Documents.models import Document,TypeDocument
from .serializers import BureauOrdreSerializer, DocumentSerializer, TypeDocumentSerializer, ServiceSerializer, UserSerializer,AdministrationSerializer, PermissionSerializer
from rest_framework.permissions import IsAuthenticated,AllowAny,IsAdminUser
from rest_framework.views import APIView
from django.contrib.auth.models import User
from rest_framework.authentication import SessionAuthentication, BasicAuthentication,TokenAuthentication
from django.contrib.auth import get_user_model
from django.contrib.auth.hashers import make_password

from rest_framework_simplejwt.authentication import JWTAuthentication

from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly, DjangoModelPermissions
from rest_framework.response import Response
from rest_framework.views import APIView

from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from django.contrib.auth import login

from django.contrib.auth.models import Permission
from django.db.models import Count
import django_filters.rest_framework

# Create your views here.def getUsers(request): 

#@csrf_exempt
#@api_view(['GET','POST','PUT','DELETE']) 



class TypeDocumentView(viewsets.ModelViewSet):
    serializer_class = TypeDocumentSerializer
    queryset=TypeDocument.objects.all()
    authentication_classes=[JWTAuthentication]
    permission_classes = [DjangoModelPermissions] 
    #permission_classes = [IsAuthenticated] 

class DocumentView(viewsets.ModelViewSet):
    serializer_class = DocumentSerializer
    queryset=Document.objects.all()
    authentication_classes=[JWTAuthentication]
    permission_classes = [AllowAny] 
    #permission_classes = [DjangoModelPermissions] 

    #queryset=Document.objects.all().values('id_serv').annotate(nbr_doc=Count('id_serv')).order_by()
    def get_queryset(self):

        sort_by_dict = {'asc': '', 'desc': '-'}
        queryset = Document.objects.all()        

        group_by = self.request.query_params.get('id_serv', None)

        # grouping the queryset
        if group_by is not None:
            queryset = queryset.values(group_by).annotate(nbr_doc=Count(group_by))#.order_by() 

            print('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',queryset) 
                         
        return queryset
        





    
    

class ServiceView(viewsets.ModelViewSet):
    serializer_class = ServiceSerializer
    queryset=Service.objects.all()
    authentication_classes=[JWTAuthentication]
    permission_classes = [DjangoModelPermissions] 
    #permission_classes = [AllowAny] 
    
    


class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    authentication_classes=[JWTAuthentication]
    permission_classes = [DjangoModelPermissions] 
    #permission_classes = [AllowAny] 

class AdminViewSet(viewsets.ModelViewSet):
    serializer_class = AdministrationSerializer    
    queryset = Administration.objects.all()
    authentication_classes=[JWTAuthentication]
    permission_classes = [DjangoModelPermissions] 
    #permission_classes = [IsAuthenticated] 

class PermissionViewSet(viewsets.ModelViewSet):
    serializer_class = PermissionSerializer
    queryset = Permission.objects.all()
    authentication_classes=[JWTAuthentication]
    permission_classes = [AllowAny] 
    #permission_classes = [IsAuthenticated] 
    
 

class BureauOrdreView(viewsets.ModelViewSet):
    serializer_class= BureauOrdreSerializer
    queryset = BureauOrdre.objects.all()
    authentication_classes=[JWTAuthentication]
    permission_classes = [AllowAny] 

class HelloView(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        content = {'message': 'Hello, World!'}
        return Response(content)
