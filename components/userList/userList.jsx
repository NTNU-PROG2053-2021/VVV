import React from 'react';
import {
    Divider,
    List,
    ListItem,
    ListItemText,
}
    from '@material-ui/core';
import './userList.css';
import { Link } from "react-router-dom";

import fetchModel from '../../lib/fetchModelData';

/**
 * Define UserList, a React componment of CS142 project #5
 */
class UserList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: []
        }

        fetchModel("/user/list")
            .then(data => this.setState({ users: data }))
    }

    render() {
        return (
            <div>
                <List component="nav">
                    {
                        this.state.users.map((user) =>
                            <div key={user._id}>
                                <ListItem button component={Link} to={`/users/${user._id}`}>
                                    <ListItemText primary={`${user.first_name} ${user.last_name}`} />
                                </ListItem>
                                <Divider />
                            </div>
                        )
                    }
                </List>
            </div>
        );
    }
}

export default UserList;
