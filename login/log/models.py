from django.db import models

class login(models.Model):
    email=models.CharField(max_length=30)
    password=models.CharField(max_length=30)
    role=models.CharField(max_length=30)

class register(models.Model):
    name=models.CharField(max_length=30)
    contact=models.CharField(max_length=30)
    login_id=models.ForeignKey(login,on_delete=models.CASCADE)
  
class show(models.Model):
    filmName=models.CharField(max_length=30)
    star=models.CharField(max_length=30)
    releaseDate=models.CharField(max_length=30)
    rating=models.CharField(max_length=30)
    directorName=models.CharField(max_length=30)