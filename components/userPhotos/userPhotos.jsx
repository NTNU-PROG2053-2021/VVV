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
            spacing={0}
            direction="column"
            alignItems="center"
            style={{ minHeight: '100vh' }}>
            {
                window.cs142models.photoOfUserModel(this.props.match.params.userId).map(photo => 
                    <Grid 
                    item 
                    key={photo._id}>
                        <img src={`/images/${photo.file_name}`} style={{
                            height: 250
                            // TODO: Maybe put this into separate stylesheet
                        }}/>
                    </Grid>
                )
            }
            </Grid>
        );
    }
}

export default UserPhotos;
