import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import Welcome from './welcome/Welcome';
import reducer from './app/reducers/TodoReducer'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Router, Route, Link, browserHistory} from 'react-router'

const store = createStore(reducer, window.devToolsExtension && window.devToolsExtension());

injectTapEventPlugin();

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Welcome} />
            <Route path="/todo" component={App} />
        </Router>
    </Provider>
    , document.getElementById('app')
);