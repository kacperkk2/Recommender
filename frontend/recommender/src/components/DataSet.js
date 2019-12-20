import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';

class DataSet extends React.Component {
    elementStyle = () => {
        return {
            backgroundColor: (this.props.dataSet.name === this.props.picked.name) 
                ? '#add8e6' : '#f4f4f4',
            padding: '10px',
            margin: '10px',
            cursor: 'pointer'
        }
    }

    pickedDataSet = () => {
        this.props.pickedDataSet(this.props.dataSet);
    }

    render() {
        return (
            <Card title={this.props.dataSet.name} style={this.elementStyle()} onClick={this.pickedDataSet} bordered={false} >
                <p>Number of users: {this.props.dataSet.users_num}</p>
                <p>Number of items: {this.props.dataSet.items_num}</p>
                <p>Density: {this.props.dataSet.density}%</p>
                <p>Description: {this.props.dataSet.description}</p>
            </Card>
        );
    }
}

DataSet.propTypes = {
    dataSet: PropTypes.object.isRequired
}

export default DataSet;