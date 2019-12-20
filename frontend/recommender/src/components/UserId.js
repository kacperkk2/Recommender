import React from 'react';

class UserId extends React.Component {

    state = {
        userIdInput: ''
    }

    handleChange = (e) => {
        this.setState( {userIdInput: e.target.value} )
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

    render() {
        return (
            <div>
                <form onSubmit={this.userIdSubmit}>
                    <input type="text" placeholder="User id" onChange={this.handleChange} />
                    <input type="submit" value="Recommend!" />
                </form>

                {this.getRecommendationsDiv()}
            </div>
        );
    }
}

export default UserId;

// value={this.state.value} onChange={this.handleChange}