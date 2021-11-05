import React from 'react';
import {
    AppBar, Card, CardContent, CardHeader, Toolbar, Typography
} from '@material-ui/core';
import './Comment.css';
import { Link } from 'react-router-dom';

class Comment extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card variant="outlined">
                <CardContent>
                    <Typography>
                        {this.props.text}
                    </Typography>
                    <br />
                    <Typography variant="body2">
                        {this.props.date_time}
                    </Typography>
                    <Link to={`/users/${this.props.user._id}`}>
                        <Typography variant="body2">
                            {this.props.user.first_name} {this.props.user.last_name}
                        </Typography>
                    </Link>
                </CardContent>
            </Card>

        );
    }
}

export default Comment;
