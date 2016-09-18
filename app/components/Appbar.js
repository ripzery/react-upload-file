import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import ProgressLoading from './ProgressLoading'
import CircularProgress from 'material-ui/CircularProgress';

class Appbar extends React.Component {
    constructor() {
        super();
        this.upload = this.upload.bind(this);
        this.state = {
            count: 0,
            title: "React Uploader"
        };
        this.startUploadingProgress = this.startUploadingProgress.bind(this);
        this.stopUploadingProgress = this.stopUploadingProgress.bind(this);
        this.tick = this.tick.bind(this);
    }

    upload() {
        if (this.props.files.upload.length > 0) {
            this.props.upload(this.props.files, this.props.selectedAlbum);
            this.startUploadingProgress()
        } else {
            console.log("Please select at least 1 file!");
        }
    }

    startUploadingProgress() {
        this.progress = setInterval(this.tick, 1000)
        this.setState({
            title: "กำลังอัพโหลด"
        })
    }

    stopUploadingProgress() {
        clearInterval(this.progress);
        this.setState({
            title: "เย้เสร็จแล้ว!!"
        });
        setTimeout(() => {
            this.setState({title: "React Uploader"})
        }, 4000)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.uploadedFiles.length > 0) {
            this.stopUploadingProgress()
        }
    }

    componentWillUnmount() {
        this.stopUploadingProgress();
    }

    tick() {
        this.setState({
            count: this.state.count + 1
        }, function () {
            this.setState({
                title: this.state.count % 3 === 0 ? "กำลังอัพโหลด" : (this.state.count % 3 === 1 ? "กำลังอัพโหลด ใจเย็นๆนะ" : "กำลังอัพโหลด ใจเย็นๆนะ รอแป๊ปนึง")
            })
        });
    }

    render() {
        return (
            <AppBar
                title={<span >{this.state.title}</span>}
                iconElementLeft={this.props.files.length === 0 ? null : <IconButton onClick={this.props.removeAll} ><NavigationClose /></IconButton>}
                iconElementRight={
                <FlatButton label="Upload" type="submit" onClick={this.upload} />}
            />
        );
    }
}

export default Appbar
