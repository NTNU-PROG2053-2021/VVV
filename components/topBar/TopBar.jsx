import React from 'react';
import {
    AppBar, Toolbar, Typography, Box
} from '@material-ui/core';
import './TopBar.css';

/**
 * Define TopBar, a React componment of CS142 project #5
 */
class TopBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            display: "",
        }
    }

    // when component loads, try to update display
    componentDidMount() {
        this.updateDisplay(this.props)
    }

    // when component updates, check if new data is different
    // and try to update if the data is different
    componentDidUpdate(prevProps) {
        if (this.props !== prevProps) {
            this.updateDisplay(this.props)
        }
    }

    updateDisplay(props) {
        // check if props is empty
        if (props.match) {

            // get user details
            var user = window.cs142models.userModel(props.match.params.userId)

            // check if user page or photos page
            if (this.props.match.path.startsWith("/user")) {
                // update display
                this.setState({
                    display: user.first_name + " " + user.last_name
                })
            } else if (this.props.match.path.startsWith("/photos")) {
                // update display
                this.setState({
                    display: "Photos of " + user.first_name + " " + user.last_name
                })
            }
        }
    }


    render() {
        return (
            <AppBar className="cs142-topbar-appBar" position="absolute">
                <Toolbar>
                    <Box display='flex' flexGrow={1}>
                        <Typography variant="h5" color="inherit">
                            Verdens Vide Vev
                        </Typography>
                    </Box>
                    <Typography variant="h5" color="inherit">
                        {this.state.display}
                    </Typography>
                </Toolbar>
            </AppBar>
        );
    }
}

export default TopBar;
