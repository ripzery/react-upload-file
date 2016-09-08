import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';

const Appbar = ({files, removeAll}) => (
    <AppBar
        title={<span >React Uploader</span>}
        iconElementLeft={files.length === 0 ? null : <IconButton onClick={removeAll} ><NavigationClose /></IconButton>}
        iconElementRight={<FlatButton label="Upload" />}
    />
)

export default Appbar
