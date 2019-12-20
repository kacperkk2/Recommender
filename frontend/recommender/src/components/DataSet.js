import React from 'react';
import PropTypes from 'prop-types';

class DataSet extends React.Component {
    elementStyle = () => {
        return {
            backgroundColor: (this.props.dataSet.name === this.props.picked.name) 
                ? '#add8e6' : '#f4f4f4',
            padding: '10px',
            borderBottom: '2px #ccc dotted'
        }
    }

    pickedDataSet = () => {
        this.props.pickedDataSet(this.props.dataSet);
    }

    render() {
        return (
            <div style={this.elementStyle()}>
                <p>
                    <input type="radio" value={this.props.dataSet.name} name="dataSet" onChange={this.pickedDataSet} />
                    {this.props.dataSet.name} 
                </p>
            </div>
        );
    }
}

DataSet.propTypes = {
    dataSet: PropTypes.object.isRequired
}

export default DataSet;