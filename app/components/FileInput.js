import React from 'react';
import Dropzone from 'react-dropzone'
import {ReactRpg} from 'react-rpg';
import Paper from 'material-ui/Paper';
import {selectedFiles} from '../actions/UploadFileAction'
import {lightWhite, minBlack, lightBlack, darkBlack} from 'material-ui/styles/colors';

const styles = {
    dropZoneEmpty: {
        width: "98%",
        minHeight: "200px",
        height: "100%",
        overflow: "auto",
        backgroundColor: minBlack,
        border: "2px dashed rgb(102, 102, 102)",
        borderRadius: 5,
        margin: "auto",
        verticalAlign: "middle",
        lineHeight: "200px",
        marginTop: 16
    }, dropZoneNotEmpty: {
        width: "98%",
        minHeight: "200px",
        height: "100%",
        backgroundColor: minBlack,
        overflow: "auto",
        border: "2px dashed rgb(102, 102, 102)",
        borderRadius: 5,
        margin: "auto",
        marginTop: 16
    },
    marginTop16: {marginTop: 16},
    full: {width: "100%", height: "100%", marginTop: 16},
    imgResponsive: {maxWidth: "200px", height: "auto", margin: 8},
    paper: {
        height: "auto",
        width: "80%",
        margin: 20,
        textAlign: 'center',
        display: 'inline-block'
    },
    textWhite: {
        color: "#fff"
    }
};

class FileInput extends React.Component {
    constructor() {
        super();
        this.onDrop = this.onDrop.bind(this)
    }

    onDrop(files) {
        let newFiles = files.map(function (file) {
            return {...file, url: file.preview}
        });
        this.props.dispatch(selectedFiles(files, newFiles));
    }
    render() {
        return (
            <Dropzone onDrop={this.onDrop}
                      style={this.props.previewFiles.length > 0 ? styles.dropZoneNotEmpty : styles.dropZoneEmpty}>
                <div style={styles.textWhite}>
                    { this.props.previewFiles.length > 0
                        ? <FileDetail
                        files={this.props.previewFiles}/>
                        : <p className="flow-text">DROP OR SELECT</p>}
                </div>
            </Dropzone>

        );
    }
}

const FileDetail = ({files}) => (
    <div style={styles.marginTop16}>
        <p style={styles.textWhite} className="flow-text">Total {files.length} images</p>
        <ReactRpg imagesArray={files} columns={[ 1, 2, 5 ]} padding={10}/>
    </div>
);


export default FileInput