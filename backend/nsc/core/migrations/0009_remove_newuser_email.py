# Generated by Django 4.0.3 on 2022-03-28 17:07

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0008_adminupload_announcement'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='newuser',
            name='email',
        ),
    ]