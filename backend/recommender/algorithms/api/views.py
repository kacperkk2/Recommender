from rest_framework.generics import ListAPIView

from ..models import Algorithm
from .serializers import AlgorithmSerializer


class AlgorithmListView(ListAPIView):
    queryset = Algorithm.objects.all()
    serializer_class = AlgorithmSerializer