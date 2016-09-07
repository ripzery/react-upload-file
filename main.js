import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import injectTapEventPlugin from 'react-tap-event-plugin';

const store = createStore(reducer, window.devToolsExtension && window.devToolsExtension());

injectTapEventPlugin();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('app')
);