import React from 'react';
import Algorithm from './Algorithm';
import axios from 'axios';

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
        return this.state.algorithms.map(
            (algorithm) => (
                <Algorithm key={algorithm.short} picked={this.props.picked} algorithm={algorithm} pickedAlgorithm={this.props.pickedAlgorithm}/>
            )
        );
    }
}

export default AlgorithmList;