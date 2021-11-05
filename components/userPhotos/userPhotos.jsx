import React from 'react';
import {
    Avatar,
    Paper,
    Typography,
    Card,
    List,
    Grid,
    CardHeader,
    CardMedia,
    Collapse,
    CardActions,
    IconButton,
    CardContent,
    Button,
    Container
} from '@material-ui/core';
import Image from 'material-ui-image';

import { withStyles, createStyles } from '@material-ui/core';


import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

import './userPhotos.css';
import Comment from '../comment/Comment'

/**
 * Define UserPhotos, a React componment of CS142 project #5
 */
class UserPhotos extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    toggleCollapse(index) {
        this.setState({ [index]: !this.state[index] });
    }



    render() {
        return (
            <div className="userPhotosContainer">
                {
                    window.cs142models.photoOfUserModel(this.props.match.params.userId).map((photo, index) =>
                        <Card key={photo._id} variant="outlined">
                            <CardHeader
                                title={photo.file_name}
                                subheader={photo.date_time}
                            />
                            <CardMedia
                                component="img"
                                image={`/images/${photo.file_name}`}
                                alt={"Could not display photo!"}
                            />
                            <CardActions>
                                <IconButton onClick={(e) => this.toggleCollapse(index)}>
                                    <Typography>Comments</Typography>
                                    {this.state[index] ? < ExpandLessIcon /> : <ExpandMoreIcon />}
                                </IconButton>
                            </CardActions>
                            <Collapse in={this.state[index]} timeout="auto" unmountOnExit>
                                <CardContent>
                                    {
                                        photo.comments ? (
                                            photo.comments.map(comment => (
                                                <Comment key={comment._id} text={comment.comment} />
                                            )
                                        )) : <Typography>No comments yet. Be the first to comment :)</Typography>
                                    }
                                </CardContent>
                            </Collapse>
                        </Card>
                    )
                }
            </div>
        );
    }
}

export default UserPhotos;
