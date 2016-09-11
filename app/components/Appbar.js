import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import {fetchGalleryTypes} from '../actions/UploadFileAction'

class Appbar extends React.Component {
    constructor() {
        super();
        this.upload = this.upload.bind(this)
    }

    upload() {
        if (this.props.files.length > 0) {
            let formData = new FormData();
            this.props.files.reduce((a, file) => formData.append("photos", file), this.props.files[0]);
            formData.append("folder", "custom");
            fetchGalleryTypes("http://blog.ripzery.com:3000/upload/upload", formData)
        }else{
            console.log("Please select at least 1 file!");
        }
    }

    render() {
        return (
            <AppBar
                title={<span >React Image Uploader</span>}
                iconElementLeft={this.props.files.length === 0 ? null : <IconButton onClick={this.props.removeAll} ><NavigationClose /></IconButton>}
                iconElementRight={<FlatButton label="Upload" type="submit" onClick={this.upload} />}
            />
        );
    }
}

export default Appbar