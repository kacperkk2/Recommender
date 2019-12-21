import React from 'react';
import { InputNumber, Button } from 'antd';

class UserId extends React.Component {

    state = {
        userIdInput: '1'
    }

    handleChange = (value) => {
        this.setState( {userIdInput: value} )
    }

    userIdSubmit = (e) => {
        e.preventDefault();
        this.props.userIdSubmit(this.state.userIdInput);
    }

    getRecommendationsDiv = () => {
        if (Object.getOwnPropertyNames(this.props.pickedDataSet).length === 0) {
            return(
                <div>
                    <p> Pick a dataset to see users ids examples </p>
                </div>
            )
        }
        else {
            return(
                <div>
                   <p> {this.props.pickedDataSet.users_id_sample} </p>
                </div>
            )
        }
    }

    isAlgorithmAndDataSetPicked = () => {
        return (Object.getOwnPropertyNames(this.props.pickedDataSet).length !== 0 && 
        Object.getOwnPropertyNames(this.props.pickedAlgorithm).length !== 0) ? false : true;
    }

    render() {
        return (
            <div>
                <form onSubmit={this.userIdSubmit}>
                    <InputNumber min={1} defaultValue={1} onChange={this.handleChange} />
                    {/* <Button type="primary" onSubmit={this.userIdSubmit}>Recommend!</Button> */}
                    <input type="submit" value="Recommend!" disabled={this.isAlgorithmAndDataSetPicked()} />
                </form>

                {this.getRecommendationsDiv()}
            </div>
        );
    }
}

export default UserId;

// value={this.state.value} onChange={this.handleChange}