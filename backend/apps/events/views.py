from rest_framework import generics, status
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from .models import CityEvent, EventRegistration
from .serializers import CityEventSerializer, EventRegistrationSerializer

class CityEventListView(generics.ListAPIView):
    queryset = CityEvent.objects.filter(is_active=True)
    serializer_class = CityEventSerializer
    permission_classes = (AllowAny,)

class EventRegistrationCreateView(generics.ListCreateAPIView):
    """
    GET  /api/events/register/  -> list the authenticated user's registrations
    POST /api/events/register/  -> register for a city event
    """
    serializer_class = EventRegistrationSerializer
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        return EventRegistration.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        # Automatically set participation_type based on user role
        user = self.request.user
        p_type = 'volunteer' if user.role == 'alumni' else 'attendee'
        serializer.save(user=user, participation_type=p_type)

    def create(self, request, *args, **kwargs):
        event_id = request.data.get('event')
        if not event_id:
            return Response({"error": "Event ID is required"},
                            status=status.HTTP_400_BAD_REQUEST)

        if EventRegistration.objects.filter(user=request.user,
                                            event_id=event_id).exists():
            return Response(
                {"detail": "You are already registered for this city event."},
                status=status.HTTP_400_BAD_REQUEST
            )

        return super().create(request, *args, **kwargs)
