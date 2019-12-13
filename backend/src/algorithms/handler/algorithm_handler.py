import numpy as np
import pandas as pd
import pickle

COL_USER = "UserId"
COL_ITEM = "PathId"
COL_RATING = "Rating"
COL_PREDICTION = "Prediction"
COL_TIMESTAMP = "Timestamp"


def handle_call(args, algorithm_file, model):
    data_set = args[1]
    algorithm = algorithm_file[:-len(".py")]
    path = f"data_sets/{data_set}.txt"

    data = pd.read_csv(path, sep=";", names=[COL_USER, COL_ITEM, COL_RATING, COL_TIMESTAMP])
    data.sort_values(COL_TIMESTAMP, inplace=True)
    model_to_save = model.prepare_model(data)

    file = open(f'models/{algorithm}_{data_set}.pkl', 'wb+')
    pickle.dump(model_to_save, file)
    file.close()

    return 0
    #
    # elif args[1] == "recommend":
    #     data_set = args[2]
    #     file = open(f'models/{data_set}.pkl', 'rb')
    #     saved_model = pickle.load(file)
    #     file.close()
    #
    #     recommendations = model.recommend(saved_model, args[3])
    #     return recommendations