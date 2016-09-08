import React from 'react';
import Dropzone from 'react-dropzone'

const styles = {
    dropZone: {
        width: 200,
        height: 200,
        border: "2px dashed rgb(102, 102, 102)",
        borderRadius: 5,
        margin: "auto",
        lineHeight: "200px",
        verticalAlign: "middle"
    },
    marginTop16: {marginTop: 16},
    imgResponsive: {maxWidth: "60%"}
};

class FileInput extends React.Component {
    constructor() {
        super();
        this.state = {
            file: null
        };
        this.onDrop = this.onDrop.bind(this)
    }

    onDrop(files) {
        this.setState({
            file: files[0]
        }, function () {
            console.log(this.state.file)
        });
    }

    render() {
        return (
            <div>
                <Dropzone onDrop={this.onDrop} style={styles.dropZone}>
                    <div>Drop, or select a file</div>
                </Dropzone>
                { this.state.file != null ? <FileDetail file={this.state.file}/> : null}
            </div>
        );
    }
}

const FileDetail = ({file}) => (
    <div>
        <h4> File name : {file.name}</h4>
        <p> Size : {file.size} bytes</p>
        <p> Type : {file.type}</p>
        <p> Last modified : {file.lastModifiedDate.toDateString()} {file.lastModifiedDate.toTimeString()}</p>
        <img id="blah" src={file.preview} alt="your image" style={styles.imgResponsive}/>
    </div>
);


export default FileInput