# Generated by Django 4.0.3 on 2022-03-15 20:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_rename_id_project_newuser_username'),
    ]

    operations = [
        migrations.AddField(
            model_name='newuser',
            name='email',
            field=models.EmailField(default=2, max_length=254, unique=True, verbose_name='email address'),
            preserve_default=False,
        ),
    ]