import React from 'react';

const styles = {
    textCenter: {textAlign: 'center'},
    marginTop16: {marginTop: 16},
    imgResponsive: { maxWidth: "60%"}
};

class FileInput extends React.Component {
    constructor(){
        super();
        this.update = this.update.bind(this);
        this.previewImg = this.previewImg.bind(this);
        this.state = {
            file: null,
            previewImg: null
        }
    }

    previewImg(file){
        let reader = new FileReader();
        reader.onloadend = () => {
            this.setState({
                file: file,
                previewImg: reader.result
            })
        };
        reader.readAsDataURL(file[0])
    }

    update(e){
        this.setState({
            file: e.target.files,
            previewImg: null
        }, function(){
            console.log(this.state.file);
            this.previewImg(this.state.file);
        })
    }

    render(){
        return (
            <div>
                <input type="file" name="fileInput" onChange={this.update} id="fileInput"/>
                <br />
                { this.state.file != null ? <FileDetail file={this.state.file[0]} imgPath={this.state.previewImg} /> : null}
            </div>
        );
    }
}

const FileDetail = ({file, imgPath}) => (
    <div>
        <h4> File name : {file.name}</h4>
        <p> Size : {file.size} bytes</p>
        <p> Type : {file.type}</p>
        <p> Last modified : {file.lastModifiedDate.toDateString()} {file.lastModifiedDate.toTimeString()}</p>
        <img id="blah" src={imgPath} alt="your image" style={styles.imgResponsive} />
    </div>
);



export default FileInput