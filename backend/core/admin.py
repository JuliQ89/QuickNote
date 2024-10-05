from django.contrib import admin
from .models import Note, Color

# Register your models here.
class NoteAdmin(admin.ModelAdmin):
    list_display = ["title", "color", "updated_at", "created_at"]

admin.site.register(Note, NoteAdmin)
admin.site.register(Color)
