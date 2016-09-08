import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FileInput from './FileInput'

const styles = {
    textCenter: {textAlign: 'center'},
    marginTop16: {marginTop: 16}
};

const UploadApp = () => (
    <div style={styles.textCenter}>
        <Title />
        <FileInput />
        <RaisedButton type="file" style={styles.marginTop16} label="Upload" primary={true}/>
    </div>
);
const Title = () => (
    <div>
        <h1>React Uploader</h1>
    </div>
);

export default UploadApp