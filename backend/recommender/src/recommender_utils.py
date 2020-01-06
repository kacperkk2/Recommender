import pickle
import pandas as pd

import os
import sys
from src.algorithms.markov_model import MarkovModel
from src.algorithms.most_popular import MostPopular
from src.algorithms.user_knn import UserKNN
from src.algorithms.sar import SAR
from src.algorithms import reco_utils
from .mapper import map_to_algorithm
sys.modules['reco_utils'] = reco_utils

from results.models import RecommendationElement
from histories.models import HistoryElement


COL_USER = "UserId"
COL_ITEM = "PathId"
COL_RATING = "Rating"
COL_PREDICTION = "Prediction"
COL_TIMESTAMP = "Timestamp"


def recommend(algorithm_name, data_set, user_id):
    algorithm = map_to_algorithm(algorithm_name)

    file = open(f'{os.path.dirname(os.path.abspath(__file__))}/models/{algorithm_name}_{data_set}.pkl', 'rb')
    saved_model = pickle.load(file)
    file.close()

    recommendations = algorithm.recommend(saved_model, user_id)
    recommendation_objects = [RecommendationElement(*(eval(recommendation))) for recommendation in recommendations]

    return recommendation_objects


def get_data_set_info(data_set, number_of_ids):
    data = pd.read_csv(f"{os.path.dirname(os.path.abspath(__file__))}/data_sets/{data_set}.txt", sep=";", names=[COL_USER, COL_ITEM, COL_RATING, COL_TIMESTAMP])
    data_set_info = dict()
    data_set_info['users_num'] = data[COL_USER].nunique()
    data_set_info['items_num'] = data[COL_ITEM].nunique()
    data_set_info['users_id_sample'] = list(data[COL_USER].unique())[:number_of_ids]
    data_set_info['density'] = (len(data.index) / (data_set_info['users_num'] * data_set_info['items_num'])) * 100
    data_set_info['density'] = round(data_set_info['density'], 2)
    return data_set_info


def user_history(data_set, user_id):
    data = pd.read_csv(f"{os.path.dirname(os.path.abspath(__file__))}/data_sets/{data_set}.txt", sep=";", names=[COL_USER, COL_ITEM, COL_RATING, COL_TIMESTAMP])
    history = data[data[COL_USER] == user_id][COL_ITEM].to_list()
    history_objects = [HistoryElement(*(eval(history_element))) for history_element in history]

    return history_objects


# if __name__ == '__main__':
#     # print(recommend("sar", "u100_p110", 10))
#     print(user_history("u100_p110", 10))
#     print(users_id_list("u100_p110"))