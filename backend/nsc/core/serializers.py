from rest_framework import serializers, viewsets, generics
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

from .models import *

class CustomUserSerializer(serializers.ModelSerializer):

    email = serializers.EmailField(required=False)
    username = serializers.CharField(required=True)
    password = serializers.CharField(min_length=8, write_only=True)
    is_member = serializers.BooleanField(default=True)
    is_admin = serializers.BooleanField(default=False)

    class Meta:
        model = NewUser
        fields = ('email', 'username', 'password', 'is_member', 'is_admin')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        # as long as the fields are the same, we can just use this
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

class NewUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewUser
        fields = '__all__'

class UserdetailSerializer(serializers.ModelSerializer) :
    class Meta :
        model = Userdetail
        fields = '__all__'

class ProjectListSerializer(serializers.ModelSerializer):
    class Meta :
        model = Userdetail
        fields = '__all__'

class AdminuploadSerializer(serializers.ModelSerializer) :
    class Meta :
        model = Adminupload
        fields = '__all__'

class CertificateUploadSerializer(serializers.ModelSerializer):
    class Meta:
        model = CertificateUpload
        fields = '__all__'


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        refresh = self.get_token(self.user)
        data['refresh'] = str(refresh)
        data['access'] = str(refresh.access_token)

        # Add extra responses here
        data['username'] = self.user.username
        data['admin'] = self.user.is_admin
        return data

