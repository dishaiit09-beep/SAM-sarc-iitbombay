from rest_framework import serializers
from .models import SarcTeamMember, Testimonial, MemoryPhoto, FAQ

class SarcTeamMemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = SarcTeamMember
        fields = '__all__'

class TestimonialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Testimonial
        fields = '__all__'

class MemoryPhotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = MemoryPhoto
        fields = '__all__'

class FAQSerializer(serializers.ModelSerializer):
    class Meta:
        model = FAQ
        fields = '__all__'
