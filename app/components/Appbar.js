import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';

class Appbar extends React.Component {
    constructor() {
        super();
        this.upload = this.upload.bind(this)
    }

    upload() {
        if (this.props.files.length > 0) {
            this.props.upload(this.props.files, this.props.selectedAlbum)
        }else{
            console.log("Please select at least 1 file!");
        }
    }

    render() {
        return (
            <AppBar
                title={<span >React Image Uploader</span>}
                iconElementLeft={this.props.files.length === 0 ? null : <IconButton onClick={this.props.removeAll} ><NavigationClose /></IconButton>}
                iconElementRight={
                <FlatButton label="Upload" type="submit" onClick={this.upload} />}
            />
        );
    }
}

export default Appbar
