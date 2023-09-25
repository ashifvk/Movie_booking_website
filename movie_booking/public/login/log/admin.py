from django.contrib import admin
from .models import login,register,show,contactus

admin.site.register(login)
admin.site.register(register)
admin.site.register(show)
admin.site.register(contactus)

