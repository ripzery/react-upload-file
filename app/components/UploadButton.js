import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import {fetchGalleryTypes} from '../actions/UploadFileAction'

class UploadButton extends React.Component {
    constructor(){
        super();
        this.upload = this.upload.bind(this)
    }

    upload(){
        fetchGalleryTypes("http://blog.ripzery.com:3000/api2/getTypes")
    }

    render() {
        return (
            <FlatButton label="Upload" onClick={this.upload} />
        )
    }
}

export default UploadButton