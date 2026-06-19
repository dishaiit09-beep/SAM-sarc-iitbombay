from django.urls import path
from .views import CityEventListView, EventRegistrationCreateView

urlpatterns = [
    path('cities/', CityEventListView.as_view(), name='city_events_list'),
    path('register/', EventRegistrationCreateView.as_view(), name='event_register'),
]
