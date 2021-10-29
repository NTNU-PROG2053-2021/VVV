import React from 'react';
import {
    AppBar, Toolbar, Typography
} from '@material-ui/core';
import './Comment.css';

class Comment extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
           <p>{this.props.text}</p> 
        );
    }
}

export default Comment;
