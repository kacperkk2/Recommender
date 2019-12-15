from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from src.results_utils import user_history, users_id_list, recommend
from django.http import JsonResponse


class ResultsView(APIView):

    def get(self, request, *args, **kw):
        alg = request.GET.get('alg', None)
        data = request.GET.get('data', None)
        user_id = int(request.GET.get('user_id', None))

        # payload = user_history(data, user_id)
        # payload = users_id_list(data)
        payload = recommend(alg, data, user_id)

        response = Response({"ranking_list": payload}, status=status.HTTP_200_OK)
        return response
