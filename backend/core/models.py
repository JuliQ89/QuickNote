from django.db import models
import uuid

from userauths.models import User


class Color(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    hex_code = models.CharField(max_length=8, null=True, default='2a2b33')

    def getColor(self):
        return f'#{self.hex_code}'

    def __str__(self):
        return self.getColor()


class Note(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    color = models.ForeignKey(Color, on_delete=models.CASCADE)
    title = models.CharField(max_length=256, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    
    def __str__(self):
        return self.title
