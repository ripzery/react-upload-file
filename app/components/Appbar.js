import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import UploadButton from './UploadButton'

const Appbar = ({files, removeAll}) => (
    <AppBar
        title={<span >React Image Uploader</span>}
        iconElementLeft={files.length === 0 ? null : <IconButton onClick={removeAll} ><NavigationClose /></IconButton>}
        iconElementRight={<UploadButton />}
    />
);

export default Appbar
