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
    IconButton
} from '@material-ui/core';
import Image from 'material-ui-image';

import './userPhotos.css';
import Comment from '../comment/Comment'

/**
 * Define UserPhotos, a React componment of CS142 project #5
 */
class UserPhotos extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Grid
                container
                spacing={5}
                direction="column"
                alignItems="center"
                style={{ minHeight: '100vh' }}>
                {
                    window.cs142models.photoOfUserModel(this.props.match.params.userId).map(photo =>
                        <Grid
                            item
                            sm={12}
                            key={photo._id}
                            className="userPhotosGridItem">
                            <Card>
                                <CardHeader
                                    title={photo.file_name}
                                    subheader={photo.date_time}
                                />
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image={`/images/${photo.file_name}`}
                                    alt={"Could not display photo!"}
                                />
                                

                                {/*<img src={}/>
                            <p>{photo.date_time}</p>
                            {
                                photo.comments.map(comment =>
                                    <Comment text={comment.comment} />
                                )
                            }*/}
                            </Card>
                        </Grid>
                    )
                }
            </Grid>
        );
    }
}

export default UserPhotos;
