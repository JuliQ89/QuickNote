from django.contrib import admin
from .models import Note, Color, Mode

# Register your models here.
class NoteAdmin(admin.ModelAdmin):
    list_display = ["title", "color", "updated_at", "created_at"]

admin.site.register(Note, NoteAdmin)
admin.site.register(Color)
admin.site.register(Mode)
