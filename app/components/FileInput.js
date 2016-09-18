import React from 'react';
import Dropzone from 'react-dropzone'
import {ReactRpg} from 'react-rpg';
import Paper from 'material-ui/Paper';
import {selectedFiles} from '../actions/UploadFileAction'
import {lightWhite, minBlack, lightBlack, darkBlack} from 'material-ui/styles/colors';
import {Motion, spring} from 'react-motion';
import Transition from 'react-motion-ui-pack'

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
        this.onDrop = this.onDrop.bind(this);
        this.onSelectedFile = this.onSelectedFile.bind(this);
    }

    onDrop(files) {
        let newFiles = files.map(function (file) {
            return {
                ...file, url: file.preview, isSelected: false, clickHandler: (url, obj) => {
                    // obj.stopPropagation()
                    var isSelected = obj.target.style.opacity === "";
                    obj.target.style.opacity = isSelected ? 0.2 : "";
                    obj.target.style.filter = isSelected ? "alpha(opacity=20)" : "alpha(opacity=100)";
                    file.isSelected = isSelected;
                    this.onSelectedFile(files.indexOf(file), file, files, newFiles)
                }
            }
        }, this);

        this.props.selectedFiles(files, newFiles);
    }

    onSelectedFile(index, file, files, newFiles) {
        files[index].isSelected = file.isSelected;
        newFiles[index].isSelected = file.isSelected;
        this.props.toggle(files, newFiles);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({});
    }

    render() {
        console.log(this.props.files.preview);
        return (
            <Dropzone onDrop={this.onDrop} accept="image/*" disableClick={this.props.files.preview.length > 0}
                      style={this.props.files.preview.length > 0 ? styles.dropZoneNotEmpty : styles.dropZoneEmpty}>
                <div style={styles.textWhite}>
                    { this.props.files.preview.length > 0
                        ? <FileDetail
                        files={this.props.files.preview}/>
                        : <p className="flow-text">DROP OR SELECT</p>}

                </div>
            </Dropzone>

        );
    }
}

const FileDetail = ({files}) => (
    <div style={styles.marginTop16}>
        <p style={styles.textWhite} className="flow-text">Total {files.filter((t) => !t.isSelected).length} images</p>
        <ReactRpg imagesArray={files} columns={[ 1, 2, 5 ]} padding={16}/>
    </div>

);


export default FileInput