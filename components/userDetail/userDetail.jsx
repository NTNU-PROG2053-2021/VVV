import React from 'react';
import { Divider } from '@material-ui/core';
import './userDetail.css';

/**
 * Define UserDetail, a React componment of CS142 project #5
 */
class UserDetail extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: window.cs142models.userModel(this.props.match.params.userId),
        }
    }

    componentDidUpdate(prevProps) {
        // compare old id with new id to find out if state should be updated
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            // new user id, so update state to show correct data
            this.setState({ user: window.cs142models.userModel(this.props.match.params.userId) })
        }
    }


    render() {
        return (
            <div key={this.props.match.params.userId}>
                <h1>{this.state.user.first_name}  {this.state.user.last_name}</h1>
                <p>
                    <b>About me:</b> {this.state.user.description} &nbsp;
                    <b>Location:</b> {this.state.user.location} &nbsp;
                    <b>Ocupation:</b> {this.state.user.occupation}
                </p>
                <Divider />
            </div>
        );
    }
}

export default UserDetail;
