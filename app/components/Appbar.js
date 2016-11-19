import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import {fullWhite} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import AppDrawer from './Drawer'

class Appbar extends React.Component {
    constructor() {
        super();
        this.upload = this.upload.bind(this);
        this.state = {
            count: 0,
            title: "React Uploader",
            uploading: false
        };
        this.startUploadingProgress = this.startUploadingProgress.bind(this);
        this.stopUploadingProgress = this.stopUploadingProgress.bind(this);
        this.tick = this.tick.bind(this);
    }

    upload() {
        if (this.props.files.upload.filter((t) => !t.isSelected).length > 0 && !this.state.uploading) {
            this.props.upload(this.props.files.upload.filter((t) => !t.isSelected), this.props.selectedAlbum);
            this.startUploadingProgress()
        } else {
            console.log("Please select at least 1 file!");
        }
    }

    startUploadingProgress() {
        this.progress = setInterval(this.tick, 1000);
        this.setState({
            title: "กำลังอัพโหลด",
            uploading: true
        })
    }

    stopUploadingProgress() {
        clearInterval(this.progress);
        this.setState({
            title: "เย้เสร็จแล้ว!!",
            uploading: false
        });
        setTimeout(() => {
            this.setState({title: "React Uploader"})
        }, 4000)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.uploadedFiles.length > 0 && this.state.uploading) {
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
                title={<span style={{fontSize: "36px"}}><b>{this.state.title}</b></span>}
                iconElementLeft={this.props.files.upload.length === 0 ? <IconButton onClick={this.props.openDrawer} ><NavigationMenu color={fullWhite}/></IconButton> :
                    <IconButton onClick={this.props.removeAll} disabled={this.state.uploading}><NavigationClose /></IconButton>}
                iconElementRight={
                    this.props.page == 0 ?
                    <FlatButton
                        label={this.state.uploading ? `Uploading (${this.props.files.upload.filter((t) => !t.isSelected).length}) to ${this.props.selectedAlbum}...` : "Upload"}
                        type="submit" onClick={this.upload} disabled={this.state.uploading}/>
                    : null
                }
            />
        );
    }
}

export default Appbar
