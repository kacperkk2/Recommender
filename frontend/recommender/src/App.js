import React from 'react';
// import 'antd/dist/antd.css';

import AlgorithmList from './components/AlgorithmList';
import DataSetList from './components/DataSetList';
import UserId from './components/UserId';
import axios from 'axios';

class App extends React.Component {
  state = {
    pickedAlgorithm: '',
    pickedDataSet: '',
    pickedUserId: '',
    recommendations: {}
  }

  pickedAlgorithm = (e) => {
      console.log(e.target.value)
      this.setState( {pickedAlgorithm: e.target.value} )
  }

  pickedDataSet = (e) => {
    console.log(e.target.value)
    this.setState( {pickedDataSet: e.target.value} )
  }

  userIdSubmit = (userIdInput) => {
    if(this.state.pickedAlgorithm !== '' && this.state.pickedDataSet !== '') {
      axios.get(`http://localhost:8000/results?alg=${this.state.pickedAlgorithm}&data=${this.state.pickedDataSet}&user_id=${userIdInput}`)
        .then(res => {
            this.setState({
              recommendations: res.data
            });
        })
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
              <UserId userIdSubmit={this.userIdSubmit}/>

              <div>
                {this.state.recommendations}
              </div>
          </div>
      );
  }
}

export default App;
