import React from 'react';
import Dropzone from 'react-dropzone'
import {ReactRpg} from 'react-rpg';
import Paper from 'material-ui/Paper';

const styles = {
    dropZoneEmpty: {
        width: "98%",
        minHeight: "200px",
        height: "100%",
        overflow: "auto",
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
    }
};

class FileInput extends React.Component {
    constructor() {
        super();
        this.state = {
            files: null
        };
        this.onDrop = this.onDrop.bind(this)
    }

    onDrop(files) {
        this.setState({
            files: files
        }, function () {

        });
    }
    render() {
        return (
            <Dropzone onDrop={this.onDrop} style={this.state.files != null ? styles.dropZoneNotEmpty : styles.dropZoneEmpty}>
                <div >
                    { this.state.files != null
                        ? <FileDetail
                        files={this.state.files.map(function(file) { return {...file, url: file.preview}})}/>
                        : <h1>Drop, or select file here</h1>}
                </div>
            </Dropzone>

        );
    }
}

const FileDetail = ({files}) => (
    <div style={styles.marginTop16}>
        <h3>Total {files.length} images</h3>
        <ReactRpg imagesArray={files} columns={[ 1, 2, 5 ]} padding={10}/>
    </div>
);


export default FileInput