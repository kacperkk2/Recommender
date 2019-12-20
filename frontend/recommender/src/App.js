import React from 'react';
// import 'antd/dist/antd.css';

import AlgorithmList from './components/AlgorithmList';
import DataSetList from './components/DataSetList';
import UserId from './components/UserId';
import axios from 'axios';

class App extends React.Component {
  state = {
    pickedAlgorithm: '',
    pickedDataSet: {},
    pickedUserId: '',
    recommendations: [],
    userHistory: []
  }

  pickedAlgorithm = (e) => {
      console.log(e.target.value)
      this.setState( {pickedAlgorithm: e.target.value} )
  }

  pickedDataSet = (dataSet) => {
    console.log(dataSet)
    this.setState( {pickedDataSet: dataSet} )
  }

  userIdSubmit = (userIdInput) => {
    if(this.state.pickedAlgorithm !== '' && Object.getOwnPropertyNames(this.state.pickedDataSet).length !== 0) {
      axios.get(`http://localhost:8000/results?alg=${this.state.pickedAlgorithm}&data=${this.state.pickedDataSet.name}&user_id=${userIdInput}`)
        .then(res => {
            this.setState({
              recommendations: res.data
            });
        });

      axios.get(`http://localhost:8000/histories/?data=${this.state.pickedDataSet.name}&user_id=${userIdInput}`)
        .then(res => {
            this.setState({
              userHistory: res.data
            });
        });
    }
  }

  render() {
      return (
          <div className="App">
              <h2> Algorithms: </h2>
              <AlgorithmList picked={this.state.pickedAlgorithm} pickedAlgorithm={this.pickedAlgorithm}/>
              
              <h2> Data sets: </h2>
              <DataSetList picked={this.state.pickedDataSet} pickedDataSet={this.pickedDataSet}/>
          
              <h2> User id: </h2>
              <UserId pickedDataSet={this.state.pickedDataSet} userIdSubmit={this.userIdSubmit} />

              <h2> Recommendations list: </h2>
              <div>
                {this.state.recommendations.map( recommendation => <div> {recommendation.name} </div>)}
              </div>
              <h2> User history: </h2>
              <div>
                {this.state.userHistory.map( historyElement => <div> {historyElement.name} </div>)}
              </div>
          </div>
      );
  }
}

export default App;
