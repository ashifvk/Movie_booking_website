from .models import login,register,show
from rest_framework import serializers


class loginserializers(serializers.ModelSerializer):
    class Meta:
        model=login
        fields='__all__'

class registerserializers(serializers.ModelSerializer):
    class Meta:
        model=register
        fields='__all__'

class showserializers(serializers.ModelSerializer):
    class Meta:
        model=show
        fields='__all__'