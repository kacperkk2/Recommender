import React from 'react';
import 'antd/dist/antd.css';

import RecommenderLayout from './containers/Layout'
import AlgorithmsList from './containers/AlgorithmsListView'

function App() {
  return (
    <div className="App">
      <RecommenderLayout>
        <AlgorithmsList />
      </RecommenderLayout>
    </div>
  );
}

export default App;
