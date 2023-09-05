from django.shortcuts import render
from .serializers import loginserializers,registerserializers,showserializers
from .models import login,register,show
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework import status

class registerApi(GenericAPIView):

    serializer_class=loginserializers
    serializer_class_register=registerserializers

    def post(self,request):
        role='user'
        login_id=''
        name=request.data.get('name')
        email=request.data.get('email')
        contact=request.data.get('contact')
        password=request.data.get('password')
        if(login.objects.filter(email=email)):
            return Response({'message':'duplicate user found !'},status=status.HTTP_400_BAD_REQUEST)
        serializer_login=self.serializer_class(data={'email':email,'password':password,'role':role})
        print(serializer_login)
        if(serializer_login.is_valid()):
            log=serializer_login.save()
            login_id=log.id
        serializer_reg=self.serializer_class_register(data={'name':name,'contact':contact,'email':email,'login_id':login_id})
        print(serializer_reg) 
        if serializer_reg.is_valid():
            serializer_reg.save()
            return Response({'data':serializer_reg.data,'message':'Registerd successfully','success':True},status=status.HTTP_201_CREATED)
        return Response({'data':serializer_reg.errors,'message':'failed','success':False},status=status.HTTP_400_BAD_REQUEST)
    

class getregister(GenericAPIView):
    serializer_class=registerserializers
    def get(self,request):
        queryset=register.objects.all()
        if(queryset.count()>0):
            serializer=registerserializers(queryset,many=True)
            return Response({'data':serializer.data,'message':'all product set','success':True},status=status.HTTP_200_OK)
        return Response({'data':'no data available','success':False},status=status.HTTP_400_BAD_REQUEST)


class LoginUserAPIView(GenericAPIView):
   serializer_class=loginserializers
   def post(self,request):
    role=''
    email=request.data.get('email')
    password=request.data.get('password')
    logreg=login.objects.filter(email=email,password=password)
    if(logreg.count()>0):
        read_serializer=loginserializers(logreg,many=True)
        for i in read_serializer.data:
            id=i ['id']
            print(id)
            role= i['role']
        regdata=register.objects.all().filter(login_id=id).values()
        print(regdata)
        for i in regdata:
            name=i['name']
            user_id=i['id']
        return Response({'data':{'login_id':id,'name':name,'user_id':user_id,'email':email,'password':password,'role':role},'message':'login success','success':True},status=status.HTTP_200_OK)
    else:
        return Response({'data':'invalid credentials','success':False},status=status.HTTP_400_BAD_REQUEST)
    


class AddshowAPI(GenericAPIView):
    serializer_class=showserializers
    def post(self,request):
        filmName=request.data.get('filmName')
        directorName=request.data.get('directorName')
        star=request.data.get('star')
        rating=request.data.get('rating')
        releaseDate=request.data.get('date')
        serializer_show=self.serializer_class(data={'filmName':filmName,'directorName':directorName,'star':star,'rating':rating,'releaseDate':releaseDate,})
        print(serializer_show)
        if(serializer_show.is_valid()):
            serializer_show.save()
            return Response({'data':serializer_show.data,'message':'Added successfully','success':True},status=status.HTTP_201_CREATED)
        return Response({'data':serializer_show.errors,'message':'failed','success':False},status=status.HTTP_400_BAD_REQUEST)
    
class GetshowDetails(GenericAPIView):
    serializer_class=showserializers
    def get(self,request):
        queryset=show.objects.all()
        if(queryset.count()>0):
            serializer=showserializers(queryset,many=True)
            return Response({'data':serializer.data,'message':'all show set','success':True},status=status.HTTP_200_OK)
        return Response({'data':[],'message':'no data available','success':False},status=status.HTTP_400_BAD_REQUEST)


class deleteshow(GenericAPIView):
    def delete(self,request,id):
        deldata=show.objects.get(pk=id)
        deldata.delete()
        return Response({'message':'deleted','success':True},status=status.HTTP_400_BAD_REQUEST)
    
class updateshow(GenericAPIView):
    serializer_class=showserializers
    def put(self,request,id):
       queryset=show.objects.get(pk=id)
       print(queryset)
       serializer=showserializers(instance=queryset,data=request.data,partial=True)
       print(serializer)
       if serializer.is_valid():
        serializer.save()
        return Response({'data':serializer.data,'message':'updated successfully','success':True},status=status.HTTP_201_CREATED)
       return Response({'data':serializer.errors,'message':'failed','success':False},status=status.HTTP_400_BAD_REQUEST)

class getsingleShow(GenericAPIView):
    serializer_class=showserializers
    def get(self,request,id):
        queryset=show.objects.filter(pk=id).values()
        if(queryset.count()>0):
            serializer=showserializers(queryset,many=True)
            return Response({'data':serializer.data,'message':'get  show data','success':True},status=status.HTTP_200_OK)
        return Response({'data':[],'message':'no data ','success':False},status=status.HTTP_400_BAD_REQUEST)



