import React from 'react';
import {
    Typography
} from '@material-ui/core';
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
            <div>
            {
                window.cs142models.photoOfUserModel(this.props.match.params.userId).map(photo => 
                    <div key={photo._id}>
                        <img src={`/images/${photo.file_name}`} alt="Image did not load!" />
                    </div>
                )
            }
            
            {/*<Typography variant="body1">
                This should be the UserPhotos view of the PhotoShare app. Since
                it is invoked from React Router the params from the route will be
                in property match. So this should show details of user:
                {this.props.match.params.userId}. You can fetch the model for the user from
                window.cs142models.photoOfUserModel(userId):
                <Typography variant="caption">
                    {JSON.stringify(window.cs142models.photoOfUserModel(this.props.match.params.userId))}
                </Typography>
            </Typography>
        */}
        </div>
        );
    }
}

export default UserPhotos;
