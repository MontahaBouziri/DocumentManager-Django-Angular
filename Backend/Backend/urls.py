"""Backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin
from django.urls import path
from django.conf.urls import include


from webbrowser import get
from django.urls import include, path
from Cdc_Documents.views import TypeDocumentView,DocumentView, ServiceView
from rest_framework import routers,urls

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',include('Cdc_Documents.urls')),
    #path('api-auth/', include('rest_framework.urls')),
    #path('accounts/',include('django.contrib.auth.urls'))


]