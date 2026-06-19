from rest_framework import serializers
from .models import CityEvent, EventRegistration

class CityEventSerializer(serializers.ModelSerializer):
    class Meta:
        model = CityEvent
        fields = '__all__'

class EventRegistrationSerializer(serializers.ModelSerializer):
    user_username = serializers.ReadOnlyField(source='user.username')
    user_role     = serializers.ReadOnlyField(source='user.role')
    city_name     = serializers.ReadOnlyField(source='event.city')

    class Meta:
        model = EventRegistration
        fields = ('id', 'user', 'event', 'user_username', 'user_role',
                  'city_name', 'registered_at', 'status', 'participation_type')
        read_only_fields = ('user', 'status')
