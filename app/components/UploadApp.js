import React from 'react';
import AppDrawer from '../containers/AppDrawerContainer'
import FileInput from '../containers/FileInputContainer'
import AppBar from '../containers/AppbarContainer'
import Album from '../containers/AlbumContainer'
import {fullWhite} from 'material-ui/styles/colors'
import Notification from '../containers/NotificationContainer'

const styles = {
    textCenter: {textAlign: 'center'},
    marginTop16: {marginTop: 16}
};

const UploadApp = (props) => (
    <div style={styles.textCenter}>
        <AppDrawer />
        <AppBar />
        {props.page == 0 ? <Upload /> : <Gallery />}
    </div>
);

const Upload = () => (
    <div>
        <Album />
        <FileInput />
        <Notification />
    </div>
);

const Gallery = () => (
    <div>
        Gallery
    </div>
);

export default UploadApp