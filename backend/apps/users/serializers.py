from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'first_name', 'last_name', 'role', 'contact_number', 'password', 'avatar')

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data.get('email', ''),
            first_name=validated_data.get('first_name', ''),
            last_name=validated_data.get('last_name', ''),
            role=validated_data.get('role', 'student'),
            contact_number=validated_data.get('contact_number', ''),
            avatar=validated_data.get('avatar', ''),
            password=validated_data['password']
        )
        return user


class UserUpdateSerializer(serializers.ModelSerializer):
    """
    Used for PATCH /api/auth/me/
    Allows updating first_name, last_name, username, email.
    contact_number and role are intentionally excluded (read-only on profile).
    """
    class Meta:
        model = User
        fields = ('first_name', 'last_name', 'username', 'email', 'avatar')
        extra_kwargs = {
            'username': {'required': False},
            'email':    {'required': False},
        }
