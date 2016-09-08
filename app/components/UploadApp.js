import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
    textCenter: {textAlign: 'center'}
};

const UploadApp = () => (
    <div style={styles.textCenter}>
        <Title />
        <RaisedButton label="Upload" primary={true} />
    </div>
);
const Title = () => (
    <div>
        <h1>React Uploader (New version 12)</h1>
    </div>
);

export default UploadApp