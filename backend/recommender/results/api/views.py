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

        try:
            payload = recommend(alg, data, user_id)
            serializer = RecommendationElementSerializer(payload, many=True)
            response_data = serializer.data
        except KeyError:
            response_data = "Invalid user id"

        response = Response(response_data, status=status.HTTP_200_OK)
        print(response)
        return response
