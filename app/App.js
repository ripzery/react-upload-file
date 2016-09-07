import React from 'react';
import MuiThemeProvider from '../node_modules/material-ui/styles/MuiThemeProvider';
import Uploader from './components/UploadApp'

class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider >
                <Uploader />
            </MuiThemeProvider>
        );
    }
}

export default App