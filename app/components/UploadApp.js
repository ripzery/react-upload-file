import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FileInput from '../containers/FileInputContainer'
import AppBar from '../containers/AppbarContainer'
import Album from '../containers/AlbumContainer'
import Notification from '../containers/NotificationContainer'
import ProgressLoading from './ProgressLoading'

const styles = {
    textCenter: {textAlign: 'center'},
    marginTop16: {marginTop: 16}
};

const UploadApp = () => (
    <div style={styles.textCenter}>
        <AppBar />
        <Album />
        <FileInput />
        <Notification />
        <ProgressLoading />
    </div>
);

export default UploadApp