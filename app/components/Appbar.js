import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import FlatButton from 'material-ui/FlatButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import MediaQuery from 'react-responsive';
import baseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {teal500, fullWhite} from 'material-ui/styles/colors';

class Appbar extends React.Component {
    constructor() {
        super();
        this.upload = this.upload.bind(this);
        this.state = {
            count: 0,
            title: "Euro Gallery",
            uploading: false,
            selectAlbum: 0
        };
        this.startUploadingProgress = this.startUploadingProgress.bind(this);
        this.stopUploadingProgress = this.stopUploadingProgress.bind(this);
        this.handleChange = this.handleChange.bind(this);
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

    getChildContext() {
        let custom = getMuiTheme({
            fontFamily: 'Bungee, cursive',
            palette: {
                primary1Color: teal500,
                textColor: fullWhite,
                canvasColor: "#303030"
            },
            appBar: {
                height: 80
            }
        });
        return {muiTheme: getMuiTheme(custom)};
    }

    startUploadingProgress() {
        // this.progress = setInterval(this.tick, 1000);
        this.setState({
            // title: "กำลังอัพโหลด",
            uploading: true
        })
    }

    stopUploadingProgress() {
        // clearInterval(this.progress);
        this.setState({
            // title: "เย้เสร็จแล้ว!!",
            uploading: false
        });
        // setTimeout(() => {
        //     this.setState({title: "React Uploader"})
        // }, 4000)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.uploadedFiles.length > 0 && this.state.uploading) {
            this.stopUploadingProgress()
        }
    }

    componentWillUnmount() {
        this.stopUploadingProgress();
    }

    handleChange(event, index, value) {
        this.setState({selectAlbum: value});
        this.props.resetGallery();
        this.props.loadPhotos(this.props.albums[value].name);
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
        const albumList = this.props.albums.map((album, index) => <MenuItem key={index} value={index}
                                                                            primaryText={album.name.toUpperCase()}/>);
        return (
            <AppBar
                title={
                    <div>
                        <MediaQuery maxWidth={767}>
                            <span style={{fontSize: "16px"}}><b>{this.state.title}</b></span>
                        </MediaQuery>
                        <MediaQuery minWidth={768}>
                            <span style={{fontSize: "32px"}}><b>{this.state.title}</b></span>
                        </MediaQuery>
                    </div>
                }
                iconElementLeft={this.props.files.upload.length === 0 ?
                    <IconButton onClick={this.props.openDrawer}><NavigationMenu color={fullWhite}/></IconButton> :
                    <IconButton onClick={this.props.removeAll}
                                disabled={this.state.uploading}><NavigationClose /></IconButton>}
                iconElementRight={
                    this.props.page == 0 ?
                        <FlatButton
                            label={this.state.uploading ? `Uploading (${this.props.files.upload.filter((t) => !t.isSelected).length}) to ${this.props.selectedAlbum}...` : "Upload"}
                            type="submit" onClick={this.upload} disabled={this.state.uploading}/>
                        :
                        <DropDownMenu onChange={this.handleChange} value={this.state.selectAlbum}>
                            {albumList}
                        </DropDownMenu>
                }
            />
        );
    }
}

Appbar.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired
};

export default Appbar
