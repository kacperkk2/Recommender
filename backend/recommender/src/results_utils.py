import pickle
import pandas as pd

import os
import sys
from src.algorithms.markov_model import MarkovModel
from src.algorithms.most_popular import MostPopular
from src.algorithms.user_knn import UserKNN
from src.algorithms.sar import SAR
from src.algorithms import reco_utils
sys.modules['reco_utils'] = reco_utils

from results.models import RecommendationElement
from histories.models import HistoryElement


COL_USER = "UserId"
COL_ITEM = "PathId"
COL_RATING = "Rating"
COL_PREDICTION = "Prediction"
COL_TIMESTAMP = "Timestamp"


def recommend(algorithm, data_set, user_id):
    if algorithm == "markov_model":
        model = MarkovModel()
    elif algorithm == "most_popular":
        model = MostPopular()
    elif algorithm == "user_knn":
        model = UserKNN()
    elif algorithm == "sar":
        model = SAR()
    else:
        raise NotImplementedError(f"Algorithm with name: '{algorithm}' not implemented "
                                  f"or not added to results_utils.recommend file")

    file = open(f'{os.path.dirname(os.path.abspath(__file__))}/models/{algorithm}_{data_set}.pkl', 'rb')
    saved_model = pickle.load(file)
    file.close()

    recommendations = model.recommend(saved_model, user_id)
    recommendation_objects = [RecommendationElement(*(eval(recommendation))) for recommendation in recommendations]

    return recommendation_objects


def users_id_list(data_set):
    data = pd.read_csv(f"{os.path.dirname(os.path.abspath(__file__))}/data_sets/{data_set}.txt", sep=";", names=[COL_USER, COL_ITEM, COL_RATING, COL_TIMESTAMP])
    return list(data[COL_USER].unique())


def user_history(data_set, user_id):
    data = pd.read_csv(f"{os.path.dirname(os.path.abspath(__file__))}/data_sets/{data_set}.txt", sep=";", names=[COL_USER, COL_ITEM, COL_RATING, COL_TIMESTAMP])
    history = data[data[COL_USER] == user_id][COL_ITEM].to_list()
    history_objects = [HistoryElement(*(eval(history_element))) for history_element in history]

    return history_objects


# if __name__ == '__main__':
#     # print(recommend("sar", "u100_p110", 10))
#     print(user_history("u100_p110", 10))
#     print(users_id_list("u100_p110"))