from django.db import models

class SarcTeamMember(models.Model):
    PORTFOLIO_CHOICES = (
        ('ASMP', 'ASMP'),
        ('DESIGN', 'Design'),
        ('EVENTS', 'Events'),
        ('HDA', 'Hostel & Department Affairs'),
        ('MARKETING', 'Marketing'),
        ('MPR', 'Media & PR'),
        ('OPERATIONS', 'Operations'),
        ('WEB', 'Web'),
    )

    name = models.CharField(max_length=150)
    role = models.CharField(max_length=150)
    portfolio = models.CharField(max_length=50, choices=PORTFOLIO_CHOICES)
    image = models.ImageField(upload_to='team/', blank=True, null=True)
    whatsapp = models.URLField(blank=True, null=True)
    instagram = models.URLField(blank=True, null=True)
    linkedin = models.URLField(blank=True, null=True)

    def __str__(self):
        return f"{self.name} - {self.portfolio} ({self.role})"

class Testimonial(models.Model):
    name = models.CharField(max_length=150)
    city = models.CharField(max_length=100)
    mood = models.CharField(max_length=150)
    text = models.TextField()
    is_approved = models.BooleanField(default=True)

    def __str__(self):
        return f"Testimonial from {self.name} ({self.city})"

class MemoryPhoto(models.Model):
    image = models.ImageField(upload_to='memories/')
    caption = models.CharField(max_length=250)
    city = models.CharField(max_length=100)

    def __str__(self):
        return f"Memory in {self.city} - {self.caption[:30]}"

class FAQ(models.Model):
    question = models.CharField(max_length=250)
    answer = models.TextField()
    order = models.IntegerField(default=0)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return self.question
