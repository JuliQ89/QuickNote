from django.contrib import admin
from .models import Note, Color

# Register your models here.
class ColorAdmin(admin.ModelAdmin):
    list_display = ["user", "hex_code"]

class NoteAdmin(admin.ModelAdmin):
    list_display = ["title", "updated_at"]

admin.site.register(Note, NoteAdmin)
admin.site.register(Color, ColorAdmin)
