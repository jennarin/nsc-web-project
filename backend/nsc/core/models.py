from django.db import models
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.models import User, BaseUserManager,AbstractBaseUser, PermissionsMixin
from django.conf import settings

class CustomAccountManager(BaseUserManager):

    def create_superuser(self, username, password, **other_fields):

        other_fields.setdefault('is_staff', True)
        other_fields.setdefault('is_superuser', True)
        other_fields.setdefault('is_active', True)

        if other_fields.get('is_staff') is not True:
            raise ValueError(
                'Superuser must be assigned to is_staff=True.')
        if other_fields.get('is_superuser') is not True:
            raise ValueError(
                'Superuser must be assigned to is_superuser=True.')

        return self.create_user(username, password, **other_fields)

    def create_user(self, username, password, **other_fields):

        if not username:
            raise ValueError(_('You must provide an username'))

        user = self.model(username=username, **other_fields)
        user.set_password(password)
        user.save()
        return user

class NewUser(AbstractBaseUser, PermissionsMixin):
    username = models.CharField(max_length=150, blank=False,  unique=True)

    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    is_member = models.BooleanField(default=True)

    objects = CustomAccountManager()

    USERNAME_FIELD = 'username'

    def __str__(self):
        return self.username

class Member(models.Model):
    user = models.OneToOneField(NewUser, on_delete=models.CASCADE, primary_key=True)

    def __str__(self):
        return self.user

class Userdetail(models.Model) :
    CATEGORY_CHOICE = (
        ('โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้', 'โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้'),
        ('โปรแกรมเพื่อบริหารการเปลี่ยนแปลงสภาพภูมิอากาศและสิ่งแวดล้อม', 'โปรแกรมเพื่อบริหารการเปลี่ยนแปลงสภาพภูมิอากาศและสิ่งแวดล้อม'),
        ('โปรแกรมเพื่อช่วยคนพิการและผู้สูงอายุ', 'โปรแกรมเพื่อช่วยคนพิการและผู้สูงอายุ'),
        ('โปรแกรมเพื่อใช้ภายใต้สถานการณ์โควิด-19และโรคติดเชื้ออุบัติใหม่', 'โปรแกรมเพื่อใช้ภายใต้สถานการณ์โควิด-19และโรคติดเชื้ออุบัติใหม่'),
    )
    LEVEL_CHOICE = (
        ('นิสิต นักศึกษา', 'นิสิต นักศึกษา'),
        ('นักเรียน', 'นักเรียน'),
    )

    project_id = models.CharField(max_length=200)
    project = models.CharField(max_length=200)
    category = models.CharField(max_length=512, choices=CATEGORY_CHOICE)
    level = models.CharField(max_length=512, choices=LEVEL_CHOICE, default='')
    institution = models.CharField(max_length=200)
    advisor = models.CharField(max_length=200)
    member1 = models.CharField(max_length=200)
    member2 = models.CharField(max_length=200, null=True, blank=True)
    member3 = models.CharField(max_length=200, null=True, blank=True)

    certificate = models.FileField(null=True,blank=True,upload_to='documents/certifate')

    def __str__(self) :
        return self.project_id

class Adminupload(models.Model) :
    name = 'Announcement'
    announcement = models.TextField()
    filecontent = models.FileField(upload_to='media/documents/', null=True, blank=True)

    def __str__(self) :
        return self.name

class CertificateUpload(models.Model):
    name = 'Certificate'
    project_id_certi = models.CharField(max_length=200, null=True, blank=True)
    certificate = models.FileField(upload_to='media/documents/certificate', null=True, blank=True)

    def __str__(self): 
        return f'{self.name} | {self.project_id_certi}'