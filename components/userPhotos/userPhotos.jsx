import React from 'react';
import {
    Avatar,
    Paper,
    Typography,
    Card,
    List,
    Grid
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
                    key={photo._id}
                    className="userPhotosGridItem">
                        <Card>
                            <img src={`/images/${photo.file_name}`}/>
                            <p>{photo.date_time}</p>
                            {
                                photo.comments.map(comment =>
                                    <Comment text={comment.comment} />
                                )
                            }
                        </Card>
                    </Grid>
                )
            }
            </Grid>
        );
    }
}

export default UserPhotos;
