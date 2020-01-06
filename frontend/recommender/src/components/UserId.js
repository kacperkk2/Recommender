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

    getUsersIdSample = () => {
        if (Object.getOwnPropertyNames(this.props.pickedDataSet).length === 0) {
            return(
                <p> Pick a dataset to see users ids examples </p>
            )
        }
        else {
            return(
                <p> Example ids: {JSON.parse(this.props.pickedDataSet.users_id_sample).toString()} </p>
            )
        }
    }

    isAlgorithmAndDataSetPicked = () => {
        return (Object.getOwnPropertyNames(this.props.pickedDataSet).length !== 0 && 
        Object.getOwnPropertyNames(this.props.pickedAlgorithm).length !== 0) ? false : true;
    }

    render() {
        return (
            <div style={{padding: '5px', textAlign: 'center'}}>
                {this.getUsersIdSample()}

                <InputNumber size='large' min={1} defaultValue={1} onChange={this.handleChange} />

                <div style={{padding: '30px'}}>
                    <Button style={{ fontSize: '150%', justifyContent: 'center', display: 'flex', margin: '0 auto', height: '70px', width: '400px'}} type="default" onClick={this.userIdSubmit} disabled={this.isAlgorithmAndDataSetPicked()}>Click to get recommendations!</Button>
                </div>
            </div>
        );
    }
}

export default UserId;