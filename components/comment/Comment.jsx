import React from 'react';
import {
    Card, CardContent, Typography
} from '@material-ui/core';
import './Comment.css';
import { Link } from 'react-router-dom';

export const Comment = ({ text, date_time, user }) => {
    return (
        <Card variant="outlined">
            <CardContent>
                <Typography>
                    {text}
                </Typography>
                <br />
                <Typography variant="body2">
                    {date_time}
                </Typography>
                <Link to={`/users/${user._id}`}>
                    <Typography variant="body2">
                        {user.first_name} {user.last_name}
                    </Typography>
                </Link>
            </CardContent>
        </Card>
    )
}