from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


class ResultsView(APIView):

    def get(self, request, *args, **kw):
        alg = request.GET.get('alg', None)
        data = request.GET.get('data', None)

        response = Response([1, 2, 3, alg, data], status=status.HTTP_200_OK)
        return response