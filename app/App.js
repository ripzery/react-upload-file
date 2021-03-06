import React from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {fade} from 'material-ui/utils/colorManipulator';
import {teal500, fullWhite} from 'material-ui/styles/colors';
import Uploader from './containers/UploadAppContainer'

const muiTheme = getMuiTheme({
    fontFamily: 'Bungee, cursive',
    palette: {
        primary1Color: teal500
    },
    appBar: {
        height: 80
    }
});

class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <Uploader />
            </MuiThemeProvider>
        );
    }
}

export default App