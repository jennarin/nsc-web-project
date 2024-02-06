from django.db import router
from django.urls import path, include
from rest_framework import routers
from .views import *



router = routers.DefaultRouter()
# router.register(r"adminupload", AdminuploadViewset, basename='adminview1')



urlpatterns = [
    path('', include(router.urls)),
    path("projectList/", ProjectListListView.as_view()),
    path("projectList/<str:project_id>/", ProjectId.as_view()),

    path("admin-upload-announcement/", AdminuploadViewset.as_view({'get': 'list'})),
    path('addAnnouncement/', addAnnouncement),
    path('deleteAnnouncement/<int:pk>', deleteAnnouncement),

    path("certificate/", CertificateUploadViewset.as_view({'get': 'list'})),
    path("certificate/<str:project_id_certi>/", ProjectIdCertificate.as_view()),
    path("addCertificate/", addCertificate),
    path("deleteCertificate/<int:pk>/", deleteCertificate),


    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
]
