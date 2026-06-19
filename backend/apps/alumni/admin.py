from django.contrib import admin
from .models import AlumniProfile

@admin.register(AlumniProfile)
class AlumniProfileAdmin(admin.ModelAdmin):
    list_display = ['name', 'city', 'background', 'email']
    list_filter = ['city']
    search_fields = ['name', 'background', 'experience']
