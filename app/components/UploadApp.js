import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FileInput from './FileInput'
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';

const styles = {
    textCenter: {textAlign: 'center'},
    marginTop16: {marginTop: 16}
};

const UploadApp = () => (
    <div style={styles.textCenter}>
        <AppBar
            title={<span>React Uploader</span>}
            iconElementLeft={<IconButton><NavigationClose /></IconButton>}
            iconElementRight={<FlatButton label="Upload" />}
        />
        <FileInput  />
    </div>
);
const Title = () => (
    <div>
        <h1>React Uploader</h1>
    </div>
);

export default UploadApp