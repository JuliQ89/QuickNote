from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

from userauths.models import User
from core.models import Note, Color, Mode, WhiteBoard


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        token['email'] = user.email
        token['id'] = user.id
        # ...

        return token
    

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email', 'id']


class ColorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Color
        fields = ['id', 'user', 'hex_code']

    def create(self, validated_data):
        return Color.objects.create(**validated_data)


class NoteSerializer(serializers.ModelSerializer):
    color = ColorSerializer()
    class Meta:
        model = Note
        fields = ['title', 'description', 'created_at', 'updated_at', 'pos_y', 'pos_x', 'id', 'color', 'user']


class ModeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mode
        fields = ['is_dark', 'id']


class WhiteBoardSerializer(serializers.ModelSerializer):
    class Meta:
        model = WhiteBoard
        fields = ['square_size', 'has_squares', 'id']