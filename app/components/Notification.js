import React from 'react';
import Snackbar from 'material-ui/Snackbar';

class Notification extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true
        };
    }
    
    handleRequestClose = () => {
        this.setState({
            open: false
        });
    };

    render(){
        this.state.open = this.props.uploadedFiles.length > 0;
        return (
            <Snackbar
                open={this.state.open}
                message="Upload complete"
                autoHideDuration={4000}
                onRequestClose={this.handleRequestClose}
            />
        )
    }
}

export default Notification