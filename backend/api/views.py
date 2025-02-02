from django.shortcuts import render, get_object_or_404

from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from rest_framework_simplejwt.views import TokenObtainPairView

from .serializers import MyTokenObtainPairSerializer, UserSerializer, ColorSerializer, NoteSerializer, ModeSerializer, WhiteBoardSerializer
from userauths.models import User
from core.models import Note, Color, Mode, WhiteBoard

import uuid


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


# ===== CRUD (Color) =====
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getColors(request):
    colors = Color.objects.filter(user=request.user)
    serializer = ColorSerializer(colors, many=True)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getColor(request, pk:int):
    color = get_object_or_404(Color, id=pk, user=request.user)
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
    color = get_object_or_404(Color, id=pk, user=request.user)
    color.delete()
    return Response({"color_id": pk})


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updateColor(request, pk:int):
    payload = request.data
    color = get_object_or_404(Color, id=pk, user=request.user)
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
    notes = Note.objects.filter(user=request.user)
    serializer = NoteSerializer(notes, many=True)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getNote(request, pk:uuid.UUID):
    note = get_object_or_404(Note, id=pk, user=request.user)
    serializer = NoteSerializer(note, many=False)
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def createNote(request):
    payload = request.data
    user = request.user
    color = get_object_or_404(Color, id=payload['color'], user=request.user)

    note = Note.objects.create(
        user=user,
        color=color,
        title=payload['title'],
        description=payload['description'],
        pos_y=payload.get('pos_y', 0),
        pos_x=payload.get('pos_x', 0)
    )
    serializer = NoteSerializer(note)
    return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def deleteNote(request, pk:uuid.UUID):
    note = get_object_or_404(Note, id=pk, user=request.user)
    note.delete()
    return Response({"note_id": pk})


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updateNote(request, pk:uuid.UUID):
    payload = request.data
    note = get_object_or_404(Note, id=pk, user=request.user)
    for attr, value in payload.items():
        if attr == "color":
            color = get_object_or_404(Color, id=value.get("id"))
            setattr(note, attr, color)
        else:
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


# ===== CRUD (User) =====
@api_view(['GET'])
def getUsers(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getUser(request, pk:int):
    user = get_object_or_404(User, id=pk)
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)


@api_view(['POST'])
def createUser(request):
    payload = request.data

    user = User.objects.create(
        email=payload['email'],
        username=payload['username']
    )
    user.set_password(payload['password']) 
    user.save()
    serializer = UserSerializer(user)
    return Response(serializer.data, status=status.HTTP_201_CREATED)


# === BEISPIEL ===
# {
#     "email": "mailrs@singheiser.com",
#     "password": "8yhgtdzQ",
#     "username": "robert.singheiser"
# }


# ===== CRUD (Mode) =====
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getMode(request):
    mode, created = Mode.objects.get_or_create(user=request.user)
    if created:
        mode.save()
    serializer = ModeSerializer(mode, many=False)
    return Response(serializer.data)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updateMode(request, pk:int):
    payload = request.data

    mode = Mode.objects.get(user=request.user, id=pk)
    mode.is_dark = payload.get('is_dark')
    mode.save()
    serializer = ModeSerializer(mode, many=False)
    return Response(serializer.data)



# ===== CRUD (WhiteBoard) =====
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getWhiteBoard(request):
    whiteBoard, created = WhiteBoard.objects.get_or_create(user=request.user)
    if created:
        whiteBoard.save()
    serializer = WhiteBoardSerializer(whiteBoard)
    return Response(serializer.data)


@api_view(['PUT'])
def updateWhiteBoard(request, pk:int):
    payload = request.data

    whiteBoard = WhiteBoard.objects.get(user=request.user, id=pk)
    for attr, value in payload.items():
        setattr(whiteBoard, attr, value)
    whiteBoard.save()
    serializer = WhiteBoardSerializer(whiteBoard)
    return Response(serializer.data)