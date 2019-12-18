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

    render() {
        return (
            <div>
                <form onSubmit={this.userIdSubmit}>
                    <input type="text" placeholder="User id" onChange={this.handleChange} />
                    <input type="submit" value="Recommend!" />
                </form>
            </div>
        );
    }
}

export default UserId;

// value={this.state.value} onChange={this.handleChange}