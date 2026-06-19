from django.db import models
from django.conf import settings

class CityEvent(models.Model):
    city = models.CharField(max_length=100, unique=True)
    address = models.TextField()
    event_date = models.DateField()
    day_of_week = models.CharField(max_length=20)
    time_slot = models.CharField(max_length=100)
    image = models.ImageField(upload_to='cities/', blank=True, null=True)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return f"SAM {self.city} - {self.event_date}"

class EventRegistration(models.Model):
    STATUS_CHOICES = (
        ('pending', 'Pending'),
        ('confirmed', 'Confirmed'),
        ('cancelled', 'Cancelled'),
    )

    PARTICIPATION_CHOICES = (
        ('attendee', 'Attendee'),      # Students & Parents
        ('volunteer', 'Volunteer'),    # Alumni speakers / mentors
    )

    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='registrations')
    event = models.ForeignKey(CityEvent, on_delete=models.CASCADE, related_name='registrations')
    registered_at = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='confirmed')
    participation_type = models.CharField(max_length=20, choices=PARTICIPATION_CHOICES, default='attendee')

    class Meta:
        unique_together = ('user', 'event')

    def __str__(self):
        return f"{self.user.username} -> {self.event.city} ({self.status})"
