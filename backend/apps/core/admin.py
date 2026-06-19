from django.contrib import admin
from .models import SarcTeamMember, Testimonial, MemoryPhoto, FAQ

@admin.register(SarcTeamMember)
class SarcTeamMemberAdmin(admin.ModelAdmin):
    list_display = ['name', 'portfolio', 'role']
    list_filter = ['portfolio']
    search_fields = ['name', 'role']

@admin.register(Testimonial)
class TestimonialAdmin(admin.ModelAdmin):
    list_display = ['name', 'city', 'mood', 'is_approved']
    list_filter = ['is_approved', 'city']
    search_fields = ['name', 'text']

@admin.register(MemoryPhoto)
class MemoryPhotoAdmin(admin.ModelAdmin):
    list_display = ['caption', 'city']
    list_filter = ['city']

@admin.register(FAQ)
class FAQAdmin(admin.ModelAdmin):
    list_display = ['question', 'order']
    list_editable = ['order']
