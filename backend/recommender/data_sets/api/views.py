from rest_framework.generics import ListAPIView

from ..models import DataSet
from .serializers import DataSetSerializer
from os import listdir
from os.path import isfile, join, dirname
from src.recommender_utils import get_data_set_info
from ..models import USERS_IDS_LIST_LENGTH


class DataSetListView(ListAPIView):
    queryset = DataSet.objects.all()
    serializer_class = DataSetSerializer

    def get_queryset(self):
        data_sets = [f for f in listdir(join(dirname(__file__), '../../src/data_sets'))
                     if isfile(join(join(dirname(__file__), '../../src/data_sets'), f))]
        data_sets = [f[:-len(".txt")] for f in data_sets if f.endswith(".txt")]

        queryset = self.queryset.filter(name__in=data_sets)

        if len(queryset) < len(data_sets):
            for data_set in data_sets:
                if data_set not in [data.name for data in queryset]:
                    data_set_info = get_data_set_info(data_set, USERS_IDS_LIST_LENGTH)

                    DataSet.objects.create(
                        name=data_set,
                        users_id_sample=data_set_info['users_id_sample'],
                        users_num=data_set_info['users_num'],
                        items_num=data_set_info['items_num'],
                        density=data_set_info['density'],
                        description=""
                    )
            self.queryset = DataSet.objects.filter(name__in=data_sets)

        return self.queryset.filter(name__in=data_sets)
