from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.forms import Textarea
from django.db import models

from .models import *

class UserAdminConfig(UserAdmin):
    model = NewUser
    search_fields = ['username']
    list_filter = ('username',
                     'is_active', 'is_staff')
    list_display = ('id', 'username',
                    'is_active', 'is_staff', 'is_member', 'is_admin')
    fieldsets = (
        (None, {'fields': ['username']}),
        ('Permissions', {'fields': ['is_staff', 'is_active', 'is_member', 'is_admin']}),
    )
    formfield_overrides = {
        models.TextField: {'widget': Textarea(attrs={'rows': 20, 'cols': 60})},
    }
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('username', 'password1', 'password2', 'is_active', 'is_staff',  'is_member', 'is_admin')}
         ),
    )

admin.site.register(NewUser, UserAdminConfig)
admin.site.register(Userdetail)
admin.site.register(Adminupload)
admin.site.register(CertificateUpload)
# admin.site.register(Adminupload2)