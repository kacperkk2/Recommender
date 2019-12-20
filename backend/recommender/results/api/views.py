from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import RecommendationElementSerializer

from src.results_utils import recommend


class ResultsView(APIView):

    def get(self, request, *args, **kw):
        alg = request.GET.get('alg', None)
        data = request.GET.get('data', None)
        user_id = int(request.GET.get('user_id', None))

        payload = recommend(alg, data, user_id)

        serializer = RecommendationElementSerializer(payload, many=True)
        response = Response(serializer.data, status=status.HTTP_200_OK)
        return response
