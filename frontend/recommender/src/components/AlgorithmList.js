import React from 'react';
import Algorithm from './Algorithm';
import axios from 'axios';
import { List } from 'antd';

class AlgorithmList extends React.Component {
    state = {
        algorithms: []
    }

    componentDidMount() {
        axios.get('http://localhost:8000/algorithms/')
        .then(res => {
            this.setState({
                algorithms: res.data
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
                md: 2,
                lg: 3,
                xl: 4,
                xxl: 4,
                }}
                dataSource={this.state.algorithms}
                renderItem={algorithm => (
                <List.Item>
                    <Algorithm key={algorithm.short} picked={this.props.picked} algorithm={algorithm} pickedAlgorithm={this.props.pickedAlgorithm}/>
                </List.Item>
                )}
            />
        );
    }
}

export default AlgorithmList;