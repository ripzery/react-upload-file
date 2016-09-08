import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './app/reducers/UploadReducer'
import injectTapEventPlugin from 'react-tap-event-plugin';
import {init} from './app/actions/UploadFileAction'

// const store = createStore(null, window.devToolsExtension && window.devToolsExtension());
const store = createStore(reducer, window.devToolsExtension && window.devToolsExtension());

store.dispatch(init());

injectTapEventPlugin();

ReactDOM.render(
        <Provider store={store}><App /></Provider>
        , document.getElementById('app')
);