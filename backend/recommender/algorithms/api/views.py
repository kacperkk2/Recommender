from rest_framework.generics import ListAPIView

from ..models import Algorithm
from .serializers import AlgorithmSerializer
from os import listdir
from os.path import isfile, join, dirname


class AlgorithmListView(ListAPIView):
    queryset = Algorithm.objects.all()
    serializer_class = AlgorithmSerializer

    def get_queryset(self):
        algorithms = [f for f in listdir(join(dirname(__file__), '../../src/algorithms'))
                      if isfile(join(join(dirname(__file__), '../../src/algorithms'), f))]
        algorithms = [f[:-len(".py")] for f in algorithms if f.endswith(".py")]

        queryset = self.queryset.filter(short__in=algorithms)

        if len(queryset) < len(algorithms):
            for algorithm in algorithms:
                if algorithm not in [alg.short for alg in queryset]:
                    Algorithm.objects.create(
                        name=algorithm,
                        short=algorithm,
                        link=""
                    )
            self.queryset = Algorithm.objects.filter(short__in=algorithms)

        return self.queryset.filter(short__in=algorithms)


