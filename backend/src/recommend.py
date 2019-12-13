import os
import pickle

import execnet
from algorithms.markov_model import MarkovModel
from algorithms.most_popular import MostPopular
from algorithms.user_knn import UserKNN
from algorithms.sar import SAR


def main(algorithm, data_set, user_id):

    if algorithm == "markov_model":
        model = MarkovModel()
    elif algorithm == "most_popular":
        model = MostPopular()
    elif algorithm == "user_knn":
        model = UserKNN()
    elif algorithm == "sar":
        model = SAR()
    else:
        raise NotImplementedError(f"algorithm: '{algorithm}' not implemented or not added to recommend.py file")

    file = open(f'models/{algorithm}_{data_set}.pkl', 'rb')
    saved_model = pickle.load(file)
    file.close()

    recommendations = model.recommend(saved_model, user_id)
    return recommendations


if __name__ == '__main__':
    print(main("sar", "u100_p110", 10))