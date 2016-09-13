import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import baseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TextField from 'material-ui/TextField';

const styles = {
    textWhite: {
        color: "#fff",
        float: "left",
        margin: 16
    },
    customWidth: {
        width: 100
    },
    inline: {
        display: "inline-block"
    },
    textMargin16: {
        marginLeft: 16
    },
    customTextField: {
        marginLeft: 16,
        marginTop: -100
    }
}

class Album extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 1, albumName: ""};
        this.props.loadAlbums
    }

    getChildContext() {
        return {muiTheme: getMuiTheme(baseTheme)};
    }

    handleChange = (event, index, value) => {
        this.setState({value});
        if (value < this.props.albums.length)
            this.props.selectedAlbum(this.props.albums[value].name);
        else
            this.props.selectedAlbum(this.state.albumName)
    };

    handleTextChange = (event) => {
        this.setState({albumName: event.target.value});
        this.props.selectedAlbum(event.target.value);
    };

    render() {
        const albumList = this.props.albums.map((album, index) => <MenuItem key={index} value={index}
                                                                            primaryText={album.name.toUpperCase()}/>);
        albumList.push(<MenuItem key={albumList.length} value={albumList.length} primaryText="OR CREATE AN ALBUM =>"/>);
        return (
            <div style={styles.textWhite}>
                <h5 className="flow-text" style={styles.inline}>Upload to album... : </h5>
                <SelectField value={this.state.value} style={styles.textMargin16} autoWidth={true}
                             onChange={this.handleChange}>
                    {albumList}
                </SelectField>
                <div style={styles.inline}>
                    {this.state.value === this.props.albums.length ? <TextField
                        style={styles.customTextField}
                        hintText="Album name..."
                        onChange={this.handleTextChange}
                        value={this.state.albumName}
                        floatingLabelText="Album name"
                    /> : null}
                </div>

            </div>
        )
    }
}

Album.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired
};

export default Album