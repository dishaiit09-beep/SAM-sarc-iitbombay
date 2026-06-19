from django.db import models
from django.conf import settings

class AlumniProfile(models.Model):
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        blank=True,
        null=True,
        related_name='alumni_profile'
    )
    name = models.CharField(max_length=150)
    city = models.CharField(max_length=100)
    background = models.CharField(max_length=250, help_text="e.g. B.Tech Computer Science, Class of 2014")
    experience = models.TextField()
    image = models.ImageField(upload_to='alumni/', blank=True, null=True)
    email = models.EmailField(blank=True, null=True)
    linkedin = models.URLField(blank=True, null=True)

    def __str__(self):
        return f"{self.name} ({self.city})"
