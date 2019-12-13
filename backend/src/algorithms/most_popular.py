import os
import sys

import pandas as pd
from handler.algorithm_handler import handle_call
from utils.split import split_data
from reco_utils.dataset.python_splitters import python_chrono_split

COL_USER = "UserId"
COL_ITEM = "PathId"
COL_RATING = "Rating"
COL_PREDICTION = "Prediction"
COL_TIMESTAMP = "Timestamp"


class MostPopular(object):
    def __init__(self):
        self.popularity = None
        self.available_data = None

    def prepare_model(self, available_data):
        self.available_data = available_data
        self.popularity = dict()  # sciezka: ile razy ja przeszli

        for user_id in available_data[COL_USER].unique():
            one_user_seq = available_data[available_data[COL_USER] == user_id][COL_ITEM].tolist()
            for path in one_user_seq:
                if path not in self.popularity:
                    self.popularity[path] = 0
                self.popularity[path] += 1

        return self.available_data, self.popularity

    def recommend(self, saved_model, user_id, top_k=10):
        self.available_data, self.popularity = saved_model
        user_seq = self.available_data[self.available_data[COL_USER] == user_id][COL_ITEM].tolist()

        ranking_list = [item_occurences[0] for item_occurences in
                        sorted(self.popularity.items(), key=lambda item: item[1], reverse=True)]

        list_without_passed = [item for item in ranking_list if item not in user_seq]

        items_num = min(top_k, len(list_without_passed))
        return list_without_passed[:items_num]


if __name__ == '__main__':
    handle_call(sys.argv, os.path.basename(__file__), MostPopular())