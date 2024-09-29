from django.shortcuts import render, get_object_or_404

from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from rest_framework_simplejwt.views import TokenObtainPairView

from .serializers import MyTokenObtainPairSerializer, UserSerializer, ColorSerializer, NoteSerializer
from userauths.models import User
from core.models import Note, Color

import uuid


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


# ===== CRUD (Color) =====
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getColors(request):
    colors = Color.objects.all()
    serializer = ColorSerializer(colors, many=True)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getColor(request, pk:int):
    color = get_object_or_404(Color, id=pk)
    serializer = ColorSerializer(color, many=False)
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def createColor(request):
    payload = request.data
    user = request.user

    color = Color.objects.create(
        user=user,
        hex_code=payload['hex_code']
    )
    serializer = ColorSerializer(color)
    return Response(serializer.data, status=status.HTTP_201_CREATED)
    

@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def deleteColor(request, pk:int):
    color = get_object_or_404(Color, id=pk)
    color.delete()
    return Response({'success':True})


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updateColor(request, pk:int):
    payload = request.data
    color = get_object_or_404(Color, id=pk)
    for attr, value in payload.items():
        setattr(color, attr, value)
    color.save()
    serializer = ColorSerializer(color)
    return Response(serializer.data)


# === BEISPIEL ===
# {
#     "hex_code": "d42aac"
# }


# ===== CRUD (Note) =====
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getNotes(request):
    notes = Note.objects.all()
    serializer = NoteSerializer(notes, many=True)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getNote(request, pk:uuid.UUID):
    note = get_object_or_404(Note, id=pk)
    serializer = NoteSerializer(note, many=False)
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def createNote(request):
    payload = request.data
    user = request.user
    color = get_object_or_404(Color, id=payload['color'])

    note = Note.objects.create(
        user=user,
        color=color,
        title=payload['title'],
        description=payload['description'],
    )
    serializer = NoteSerializer(note)
    return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def deleteNote(request, pk:uuid.UUID):
    note = get_object_or_404(Note, id=pk)
    note.delete()
    return Response({'success':True})


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updateNote(request, pk:uuid.UUID):
    payload = request.data
    note = get_object_or_404(Note, id=pk)
    for attr, value in payload.items():
        setattr(note, attr, value)
    note.save()
    serializer = NoteSerializer(note)
    return Response(serializer.data)


# === BEISPIEL ===
# {
#     "color": 1,
#     "title": "Programmieren",
#     "description": "Lorem ipsum dolor sit amet, consetetur sit."
# }