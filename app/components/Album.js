import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import baseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TextField from 'material-ui/TextField';
import muiThemeable from 'material-ui/styles/muiThemeable';

const styles = {
    textWhite: {
        color: "#fff",
        margin: 16
    },
    customWidth: {
        width: 100
    },
    inline: {
        fontSize: "20px"
    },
    textMargin16: {
        marginLeft: 16
    },
    customTextField: {
        marginLeft: 16
    }
}

const CREATE_ALBUM_KEY = -1;

class Album extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: CREATE_ALBUM_KEY, albumName: ""};
        this.props.loadAlbums
    }

    getChildContext() {
        return {muiTheme: getMuiTheme(baseTheme)};
    }

    handleChange = (event, index, value) => {
        this.setState({value});
        if (value > 0)
            this.props.selectedAlbum(this.props.albums[value].name);
        else
            this.props.selectedAlbum(this.state.albumName)
    };

    handleTextChange = (event) => {
        this.setState({albumName: event.target.value});
        this.props.selectedAlbum(event.target.value);
    };

    componentWillReceiveProps(nextProps){
        if(nextProps.albums.length > 0){
            this.props.selectedAlbum(nextProps.albums[0].name);
        }
    }

    render() {
        const albumList = [<MenuItem key={CREATE_ALBUM_KEY} style={{fontFamily: this.props.muiTheme.fontFamily}} value={CREATE_ALBUM_KEY} primaryText="CREATE AN ALBUM"/>, ...this.props.albums.map((album, index) => <MenuItem key={index} value={index}
                                                                            style={{fontFamily: this.props.muiTheme.fontFamily}}
                                                                            primaryText={album.name.toUpperCase()}/>)];
        return (
            <div style={styles.textWhite}>
                <span style={{...styles.inline,fontFamily: this.props.muiTheme.fontFamily}}>Upload to album : </span>
                <SelectField value={this.state.value} style={{...styles.textMargin16, fontFamily: this.props.muiTheme.fontFamily}} autoWidth={true}
                             onChange={this.handleChange}>
                    {albumList}
                </SelectField>
                <div style={{...styles.inline, fontFamily: this.props.muiTheme.fontFamily}}>
                    {this.state.value === CREATE_ALBUM_KEY ?
                        <TextField
                            style={{...styles.customTextField, fontFamily: this.props.muiTheme.fontFamily}}
                            hintText="Album name..."
                            onChange={this.handleTextChange}
                            value={this.state.albumName}
                            floatingLabelText="Album name"/>
                        :
                        null
                    }
                </div>
            </div>
        )
    }
}

Album.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired
};

export default muiThemeable()(Album)