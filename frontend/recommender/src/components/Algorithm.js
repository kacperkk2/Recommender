import React from 'react';
import PropTypes from 'prop-types';

class Algorithm extends React.Component {
    elementStyle = () => {
        return {
            backgroundColor: (this.props.algorithm.short === this.props.picked) 
                ? '#add8e6' : '#f4f4f4',
            padding: '10px',
            borderBottom: '2px #ccc dotted'
        }
    }

    render() {
        return (
            <div style={this.elementStyle()}>
                <p>
                    <input type="radio" value={this.props.algorithm.short} name="algorithm" onChange={this.props.pickedAlgorithm} />
                    {this.props.algorithm.short} 
                </p>
            </div>
        );
    }
}

Algorithm.propTypes = {
    algorithm: PropTypes.object.isRequired
}

export default Algorithm;