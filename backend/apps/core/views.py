from rest_framework import generics
from rest_framework.permissions import AllowAny
from .models import SarcTeamMember, Testimonial, MemoryPhoto, FAQ
from .serializers import SarcTeamMemberSerializer, TestimonialSerializer, MemoryPhotoSerializer, FAQSerializer

class SarcTeamMemberListView(generics.ListAPIView):
    queryset = SarcTeamMember.objects.all()
    serializer_class = SarcTeamMemberSerializer
    permission_classes = (AllowAny,)

class TestimonialListView(generics.ListAPIView):
    queryset = Testimonial.objects.filter(is_approved=True)
    serializer_class = TestimonialSerializer
    permission_classes = (AllowAny,)

class MemoryPhotoListView(generics.ListAPIView):
    serializer_class = MemoryPhotoSerializer
    permission_classes = (AllowAny,)

    def get_queryset(self):
        queryset = MemoryPhoto.objects.all()
        city = self.request.query_params.get('city')
        if city:
            queryset = queryset.filter(city__iexact=city)
        return queryset

class FAQListView(generics.ListAPIView):
    queryset = FAQ.objects.all()
    serializer_class = FAQSerializer
    permission_classes = (AllowAny,)
