# Generated by Django 5.1.1 on 2024-10-16 15:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0006_whiteboard_user'),
    ]

    operations = [
        migrations.AddField(
            model_name='whiteboard',
            name='has_squares',
            field=models.BooleanField(blank=True, default=True, null=True),
        ),
    ]
