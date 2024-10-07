from django.urls import path

from .views import MyTokenObtainPairView, getColors, getColor, createColor, deleteColor, updateColor, getNotes, getNote, createNote, deleteNote, updateNote, getUsers, getUser, createUser

from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

urlpatterns = [
    # Django REST Framework CURD

    # == COLORS ==
    path('colors/', getColors, name='api_get_colors'),
    path('color/<str:pk>/', getColor, name='api_get_color'),
    path('colors/create/', createColor, name='api_create_color'),
    path('colors/delete/<str:pk>/', deleteColor, name='api_delete_color'),
    path('colors/update/<str:pk>/', updateColor, name='api_update_color'),

    # == NOTES ==
    path('notes/', getNotes, name='api_get_notes'),
    path('note/<str:pk>/', getNote, name='api_get_note'),
    path('notes/create/', createNote, name='api_create_note'),
    path('notes/delete/<str:pk>/', deleteNote, name='api_delete_note'),
    path('notes/update/<str:pk>/', updateNote, name='api_update_note'),

    # == USERS ==
    path('users/', getUsers, name='api_get_users'),
    path('user/<str:pk>/', getUser, name='api_get_user'),
    path('users/create/', createUser, name='api_create_user'),

    # JWT Token
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]