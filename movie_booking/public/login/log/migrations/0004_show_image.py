# Generated by Django 4.2.4 on 2023-09-09 04:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('log', '0003_rename_filmname_show_filmname'),
    ]

    operations = [
        migrations.AddField(
            model_name='show',
            name='image',
            field=models.ImageField(null=True, upload_to='images/'),
        ),
    ]
