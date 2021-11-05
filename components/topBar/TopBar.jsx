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
            user: "",
            display: "",
            currentPage: "",
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props !== prevProps) {
            this.setState({
                user: window.cs142models.userModel(this.props.match.params.userId),
                currentPage: this.props.match.path
            }, this.updateDisplay)
        }
    }

    updateDisplay() {
        if (this.state.currentPage.startsWith("/user")) {
            this.setState({ display: this.state.user.first_name + " " + this.state.user.last_name })
        } else if (this.state.currentPage.startsWith("/photos")) {
            this.setState({ display: "Photos of " + this.state.user.first_name + " " + this.state.user.last_name })
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
