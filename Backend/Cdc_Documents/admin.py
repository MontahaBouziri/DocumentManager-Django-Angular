from django.contrib import admin
from .models import TypeDocument,Document,Service,Administration,BureauOrdre
from rest_framework.authtoken.admin import TokenAdmin
from django.contrib.auth.models import User

# Register your models here.

admin.site.register(TypeDocument)
admin.site.register(Document)
admin.site.register(Service)
admin.site.register(Administration)
admin.site.register(BureauOrdre)


#TokenAdmin.raw_id_fields = ['user']
