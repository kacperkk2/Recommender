import React from 'react';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';

import AlgorithmList from './components/AlgorithmList';
import DataSetList from './components/DataSetList';
import UserId from './components/UserId';
import PathsList from './components/PathsList';
import AlertLabel from './components/AlertLabel';
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
    userHistory: [],
    errorMessage: ''
  }

  pickedAlgorithm = (algorithm) => {
    // console.log(algorithm)
    this.setState({
      pickedAlgorithm: algorithm,
      errorMessage: ''
    })
  }

  pickedDataSet = (dataSet) => {
    // console.log(dataSet)
    this.setState({
      pickedDataSet: dataSet,
      errorMessage: ''
    })
  }

  userIdSubmit = (userIdInput) => {
    if(Object.getOwnPropertyNames(this.state.pickedAlgorithm).length !== 0 && 
    Object.getOwnPropertyNames(this.state.pickedDataSet).length !== 0) {

      this.setState({
        recommendations: [],
        userHistory: [],
        errorMessage: ''
      })

      axios.get(`http://localhost:8000/results?alg=${this.state.pickedAlgorithm.short}&data=${this.state.pickedDataSet.name}&user_id=${userIdInput}`)
        .then(res => {
            // console.log(res)
            this.setState({
              recommendations: res.data
            });
        })
        .catch(error => {
          if (error.response.data.message === "NO_MODEL") {
            this.setState({
              errorMessage: "There is no model for selected elements! Please choose other"
            });
          }
          else if (error.response.data.message === "INVALID_ID") {
            this.setState({
              errorMessage: "User id not exists in selected data set! Consider using example ids"
            });
          }
          else {
            console.log(error);
          }
          return;
        });

      axios.get(`http://localhost:8000/histories/?data=${this.state.pickedDataSet.name}&user_id=${userIdInput}`)
        .then(res => {
            // console.log(res)
            this.setState({
              userHistory: res.data
            });
        })
        .catch(err => console.log(err));
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

              {this.state.errorMessage ? <AlertLabel message={this.state.errorMessage}/> : null}

              <div style={{paddingTop: '20px', paddingBottom: '20px'}}>
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
          </div>
      );
  }
}

export default App;
