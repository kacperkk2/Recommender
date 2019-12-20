import React from 'react';
import DataSet from './DataSet';
import axios from 'axios';
import { List } from 'antd';

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
        return (
            <List
                grid={{
                gutter: 16,
                xs: 1,
                sm: 2,
                md: 4,
                lg: 4,
                xl: 6,
                xxl: 3,
                }}
                dataSource={this.state.dataSets}
                renderItem={dataSet => (
                <List.Item>
                    <DataSet key={dataSet.name} picked={this.props.picked} dataSet={dataSet} pickedDataSet={this.props.pickedDataSet}/>
                </List.Item>
                )}
            />
        );
    }
}

export default DataSetList;