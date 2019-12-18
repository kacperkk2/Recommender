import React from 'react';
import DataSet from './DataSet';
import axios from 'axios';

class DataSetList extends React.Component {
    state = {
        dataSets: []
    }

    componentDidMount() {
        axios.get('http://localhost:8000/data_sets/')
        .then(res => {
            this.setState({
                dataSets: res.data
            });
        })
    }

    render() {
        return this.state.dataSets.map(
            (dataSet) => (
                <DataSet key={dataSet.name} picked={this.props.picked} dataSet={dataSet} pickedDataSet={this.props.pickedDataSet}/>
            )
        );
    }
}

export default DataSetList;