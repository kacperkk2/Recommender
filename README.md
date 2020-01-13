# Recommender system
## server app (django) and client app (react)

To run django server: python manage.py runserver (from backend/recommender)  
To run client app: npm run build, npm install -g serve, serve -s build (frontend/recommender)  

Server requirements (backend/requirements.txt)  
crucial:  
Django==3.0  
django-cors-headers==3.2.0  
djangorestframework==3.10.3  

Client app requirements:  
node v8.10.0  
npm v6.13.4  

## Code files description
### backend/recommender - django server
algorithms - responsible for GET /algorithms  
data_sets - responsible for GET /data_sets  
histories - responsible for GET /histories?data_set=<PARAM>&user_id=<PARAM>  
results - responsible for GET /results?algorithm=<PARAM>&data_set=<PARAM>&user_id=<PARAM>  
  
src - folder with all files and script which recommender system uses  
src/algorithms - source files with every algorithm in system  
src/data_sets - csv files with every data_set in system  
src/models - pickle files, there are stored prepared models, which will be used to get recommendations  

src/prepare_model.py - script for preparing models (uses prepare_model function of picked algorithm), parameters: algorithm_filename, data_set_filename  
src/recommender_utils.py - script with functions which uses django app, most important is function recommend - for getting recommendations (uses recommend function of picked algorithm), parameters: algorithm_filename, data_set_filename, user_id

### frontend/recommender - django server
src/App.js - main file, runs whole app  
src/components - all components app uses  
