import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FileInput from '../containers/FileInputContainer'
import AppBar from '../containers/AppbarContainer'

const styles = {
    textCenter: {textAlign: 'center'},
    marginTop16: {marginTop: 16}
};

const UploadApp = () => (
    <div style={styles.textCenter}>
        <AppBar />
        <FileInput  />
    </div>
);
const Title = () => (
<div>
    <h1>React Uploader</h1>
</div>
);

export default UploadApp