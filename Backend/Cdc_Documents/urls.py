from webbrowser import get
from django import views
from django.urls import include, path,re_path
from django.conf.urls import include
from .views import   BureauOrdreView, PermissionViewSet, TypeDocumentView,DocumentView, ServiceView, UserViewSet,AdminViewSet 
from . import views
from rest_framework import routers
#from rest_framework_jwt.views import obtain_jwt_token, refresh_jwt_token
#from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework import routers,urls
#from rest_framework_simplejwt import views as jwt_views
from rest_framework_simplejwt.views import (TokenObtainPairView, TokenRefreshView)




router=routers.DefaultRouter()
router.register('typedocuments',TypeDocumentView,'typedocuments')
router.register('documents',DocumentView,'documents')
router.register('service',ServiceView,'service')
router.register('users',UserViewSet,'users')
router.register('administration',AdminViewSet,'administration')
router.register('permission',PermissionViewSet,'permission')
router.register('bureauOrdre',BureauOrdreView,'bureauOrdre')


#router.register('documents2',DocumentView2,'documents2')





#urlpatterns = router.urls      AuthenticationView

urlpatterns= [
    re_path('',include(router.urls)),

    re_path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    re_path('refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    re_path('hello/', views.HelloView.as_view(), name='hello'),
    #re_path('permission/', views.HelloView.as_view(), name='permission'),



]

#router.register('accounts',UserViewSet,'accounts')
#router.register('users',UserViewSet,'users')
#router.register('api-auth',include('rest_framework.urls'))
#path('api-auth/', include('rest_framework.urls'))

#router.register('auth-obtain-token',obtain_jwt_token,'auth-obtain-token')
#router.register('auth-refresh-token',refresh_jwt_token,'auth-refresh-token') 

"""
urlpatterns = [
    path('typedocuments/', TypeDocumentView.as_view() ),
    path('typedocuments/<int:id>/', DocumentView.as_view() )
]
"""







"""
router=routers.DefaultRouter()
router.register(r'typedocuments',views.TypeDocumentView,'typedocuments')

urlpatterns = [
    path(r'^typedocuments/', TypeDocumentView.as_view(),name='gg' ),
    path(r'^typedocuments/<int:id>/', DocumentView.as_view(),name='gg' )
]
"""



