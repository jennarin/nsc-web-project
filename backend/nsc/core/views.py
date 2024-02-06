from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from django.core.files.storage import FileSystemStorage

from .models import *
from .serializers import *

from rest_framework import viewsets, generics, status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.decorators import api_view

class CustomUserCreate(APIView):
    permission_classes = [AllowAny]

    def post(self, request, format='json'):
        serializer = CustomUserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            if user:
                json = serializer.data
                return Response(json, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ProjectListViewset(viewsets.ModelViewSet):
    queryset = Userdetail.objects.all()
    serializers_class = ProjectListSerializer
    
class ProjectListListView(generics.ListAPIView):
    serializer_class = ProjectListSerializer
    def get_queryset(self):
        return Userdetail.objects.all()

class ProjectId(generics.RetrieveUpdateDestroyAPIView):
    queryset = Userdetail.objects.all()
    serializer_class = ProjectListSerializer
    lookup_field = 'project_id'

class AdminuploadViewset(viewsets.ModelViewSet) :
    queryset = Adminupload.objects.all()
    serializer_class = AdminuploadSerializer
    
    
@api_view(['POST'])
def addAnnouncement(request):
    
    serilizer = AdminuploadSerializer(data=request.data)
    
    if serilizer.is_valid():
        serilizer.save()

    return Response(serilizer.data)

@api_view(['DELETE'])
def deleteAnnouncement(request, pk):
    announcement = Adminupload.objects.get(id=pk)
    announcement.delete()

    return Response('Items delete successfully!')

# class Adminupload2Viewset(viewsets.ModelViewSet) :
#     queryset = Adminupload2.objects.all()
#     serializer_class = Adminupload2Serializer

class CertificateUploadViewset(viewsets.ModelViewSet):
    queryset = CertificateUpload.objects.all()
    serializer_class = CertificateUploadSerializer

class ProjectIdCertificate(generics.RetrieveUpdateDestroyAPIView):
    queryset = CertificateUpload.objects.all()
    serializer_class = CertificateUploadSerializer
    lookup_field = 'project_id_certi'

@api_view(['POST'])
def addCertificate(request):
    
    serilizer = CertificateUploadSerializer(data=request.data)
    
    if serilizer.is_valid():
        serilizer.save()

    return Response(serilizer.data)

@api_view(['DELETE'])
def deleteCertificate(request, pk):
    announcement = CertificateUpload.objects.get(id=pk)
    announcement.delete()

    return Response('Items delete successfully!')

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

