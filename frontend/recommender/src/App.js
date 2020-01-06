import React from 'react';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';

import AlgorithmList from './components/AlgorithmList';
import DataSetList from './components/DataSetList';
import UserId from './components/UserId';
import PathsList from './components/PathsList';
import axios from 'axios';

const labelStyle = {
  padding: '10px', 
  fontSize: '150%', 
  fontWeight: 'bold', 
  textAlign: 'center', 
  background: '#bee9e6'
};

class App extends React.Component {
  state = {
    pickedAlgorithm: {},
    pickedDataSet: {},
    pickedUserId: '',
    recommendations: [],
    userHistory: []
  }

  pickedAlgorithm = (algorithm) => {
      console.log(algorithm)
      this.setState( {pickedAlgorithm: algorithm} )
  }

  pickedDataSet = (dataSet) => {
    console.log(dataSet)
    this.setState( {pickedDataSet: dataSet} )
  }

  userIdSubmit = (userIdInput) => {
    if(Object.getOwnPropertyNames(this.state.pickedAlgorithm).length !== 0 && 
    Object.getOwnPropertyNames(this.state.pickedDataSet).length !== 0) {

      axios.get(`http://localhost:8000/results?alg=${this.state.pickedAlgorithm.short}&data=${this.state.pickedDataSet.name}&user_id=${userIdInput}`)
        .then(res => {
            console.log(res.data)
            this.setState({
              recommendations: res.data
            });
        });

      axios.get(`http://localhost:8000/histories/?data=${this.state.pickedDataSet.name}&user_id=${userIdInput}`)
        .then(res => {
            console.log(res.data)
            this.setState({
              userHistory: res.data
            });
        });
    }
  }

  render() {
      return (
          <div className="App" style={{padding: '20px', background: '#ECECEC'}}>

              <div style={labelStyle}> Algorithms </div>
              <AlgorithmList picked={this.state.pickedAlgorithm} pickedAlgorithm={this.pickedAlgorithm}/>
              
              <div style={labelStyle}> Data sets </div>
              <DataSetList picked={this.state.pickedDataSet} pickedDataSet={this.pickedDataSet}/>
          
              <div style={labelStyle}> User id </div>
              <UserId pickedDataSet={this.state.pickedDataSet} pickedAlgorithm={this.state.pickedAlgorithm} userIdSubmit={this.userIdSubmit} />

              <div style={{height: '50px'}}></div>

              <Row gutter={[24, 16]}>
                <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                  <div style={labelStyle}> Recommendations list </div>
                  <PathsList elements={this.state.recommendations}/>
                </Col>
                <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                  <div style={labelStyle}> User history </div>
                  <PathsList elements={this.state.userHistory}/>
                </Col>
              </Row>
          </div>
      );
  }
}

export default App;
