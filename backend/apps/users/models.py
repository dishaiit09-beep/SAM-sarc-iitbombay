from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    ROLE_CHOICES = (
        ('student', 'Student'),
        ('parent', 'Parent'),
        ('alumni', 'Alumni'),
        ('admin', 'Admin'),
    )
    
    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default='student')
    contact_number = models.CharField(max_length=15, blank=True, null=True)
    avatar = models.TextField(blank=True, null=True)

    def __str__(self):
        return f"{self.username} ({self.role})"
