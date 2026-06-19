from rest_framework import generics
from rest_framework.permissions import AllowAny
from .models import AlumniProfile
from .serializers import AlumniProfileSerializer

class AlumniProfileListView(generics.ListAPIView):
    serializer_class = AlumniProfileSerializer
    permission_classes = (AllowAny,)

    def get_queryset(self):
        queryset = AlumniProfile.objects.all()
        city = self.request.query_params.get('city')
        if city:
            queryset = queryset.filter(city__iexact=city)
        return queryset
