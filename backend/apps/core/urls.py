from django.urls import path
from .views import SarcTeamMemberListView, TestimonialListView, MemoryPhotoListView, FAQListView

urlpatterns = [
    path('team/', SarcTeamMemberListView.as_view(), name='team_list'),
    path('testimonials/', TestimonialListView.as_view(), name='testimonial_list'),
    path('memories/', MemoryPhotoListView.as_view(), name='memory_list'),
    path('faqs/', FAQListView.as_view(), name='faq_list'),
]
