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
    image=models.ImageField(upload_to='images/',null=True)
    star=models.CharField(max_length=30)
    releaseDate=models.CharField(max_length=30)
    rating=models.CharField(max_length=30)
    directorName=models.CharField(max_length=30)

class contactus(models.Model):
    fname=models.CharField(max_length=30)
    lname=models.CharField(max_length=30)
    email=models.CharField(max_length=30)
    number=models.CharField(max_length=30)
    message=models.CharField(max_length=30)
    status=models.CharField(max_length=30)
    reply=models.CharField(max_length=30,blank=True,default="no reply")