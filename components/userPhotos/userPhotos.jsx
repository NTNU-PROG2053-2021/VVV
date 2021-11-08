import React from 'react';
import {
    Typography,
    Card,
    CardHeader,
    CardMedia,
    Collapse,
    CardActions,
    IconButton,
    CardContent,
} from '@material-ui/core';



import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

import './userPhotos.css';
import Comment from '../comment/Comment'
import fetchModel from '../../lib/fetchModelData';

/**
 * Define UserPhotos, a React componment of CS142 project #5
 */
class UserPhotos extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            photos: [],
        };

        fetchModel(`/photosOfUser/${this.props.match.params.userId}`)
            .then(data => this.setState({ photos: data }))
    }

    toggleCollapse(index) {
        this.setState({ [index]: !this.state[index] });
    }

    render() {
        return (
            <div className="userPhotosContainer">
                {
                    this.state.photos.map((photo, index) =>
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
                                <IconButton onClick={() => this.toggleCollapse(index)}>
                                    <Typography>Comments</Typography>
                                    {this.state[index] ? < ExpandLessIcon /> : <ExpandMoreIcon />}
                                </IconButton>
                            </CardActions>
                            <Collapse in={this.state[index]} timeout="auto" unmountOnExit>
                                <CardContent>
                                    {
                                        photo.comments ? (
                                            photo.comments.map(comment => (
                                                <Comment
                                                    key={comment._id}
                                                    text={comment.comment}
                                                    user={comment.user}
                                                    date_time={comment.date_time}
                                                />
                                            )
                                            )) : <Typography>No comments yet :)</Typography>
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
