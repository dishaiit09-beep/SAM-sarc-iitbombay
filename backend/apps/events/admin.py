from django.contrib import admin
from .models import CityEvent, EventRegistration

@admin.register(CityEvent)
class CityEventAdmin(admin.ModelAdmin):
    list_display = ['city', 'event_date', 'day_of_week', 'time_slot', 'is_active']
    list_filter = ['is_active']
    search_fields = ['city', 'address']

@admin.register(EventRegistration)
class EventRegistrationAdmin(admin.ModelAdmin):
    list_display = ['user', 'event', 'registered_at', 'status']
    list_filter = ['status', 'event']
    search_fields = ['user__username', 'user__email', 'event__city']
