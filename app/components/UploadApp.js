import React from 'react';
import FileInput from '../containers/FileInputContainer'
import AppBar from '../containers/AppbarContainer'
import Album from '../containers/AlbumContainer'
import Notification from '../containers/NotificationContainer'

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
    </div>
);

export default UploadApp