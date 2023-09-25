from django.urls import path,include
from . import views

urlpatterns = [
    path("registerApi",views.registerApi.as_view(),name='registerApi'),
    path("getregister",views.getregister.as_view(),name='getregister'),
    path("LoginUserAPIView",views.LoginUserAPIView.as_view(),name='LoginUserAPIView'),
    path("AddshowAPI",views.AddshowAPI.as_view(),name='AddshowAPI'),
    path("GetshowDetails",views.GetshowDetails.as_view(),name='GetshowDetails'),
    path('deleteshow/<int:id>',views.deleteshow.as_view(),name='deleteshow'),
    path('updateshow/<int:id>',views.updateshow.as_view(),name='updateshow'),
    path('getsingleShow/<int:id>',views.getsingleShow.as_view(),name='getsingleShow'),
    path('contactusAPI',views.contactusAPI.as_view(),name='contactusAPI'),
    path('GetContactusDetails',views.GetContactusDetails.as_view(),name='GetContactusDetails'),
    path('getsinglecontactView/<int:id>',views.getsinglecontactView.as_view(),name='getsinglecontactView'),
    path("replyMessage/<int:id>",views.replyMessage.as_view(),name='replyMessage'),
    # path("updatereplyStatus/<int:id>",views.updatereplyStatus.as_view(),name='updatereplyStatus'),
        path('SearchMovie/<char>',views.SearchMovie.as_view(),name='SearchMovie'),
    # path('Update_product/<int:id>',views.Update_product.as_view(),name='Update_product'),

    
]
