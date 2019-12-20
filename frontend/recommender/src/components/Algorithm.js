import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';

class Algorithm extends React.Component {
    elementStyle = () => {
        return {
            backgroundColor: (this.props.algorithm.short === this.props.picked.short) 
                ? '#add8e6' : '#f4f4f4',
            padding: '10px',
            margin: '10px',
            cursor: 'pointer'
        }
    }

    pickedAlgorithm = () => {
        this.props.pickedAlgorithm(this.props.algorithm);
    }

    render() {
        return (
            <Card title={this.props.algorithm.name} style={this.elementStyle()} onClick={this.pickedAlgorithm} bordered={false} >
                <p>Short name: {this.props.algorithm.short}</p>
                <p>Description: {this.props.algorithm.link}</p>
            </Card>
        );
    }
}

Algorithm.propTypes = {
    algorithm: PropTypes.object.isRequired
}

export default Algorithm;