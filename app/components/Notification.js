import React from 'react';
import Snackbar from 'material-ui/Snackbar';

class Notification extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }
    
    handleRequestClose = () => {
        this.setState({
            open: false
        });
    };

    componentWillReceiveProps(nextProps){
        console.log(nextProps);
        this.setState({
            open: nextProps.uploadedFiles.length > 0
        });
    }

    render(){
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

Notification.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired
};

export default Notification