import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom'
import {createStore, applyMiddleware}from 'redux'
import {Provider} from 'react-redux'

import ReduxThunk from 'redux-thunk' //untuk jalanin async (jalan bareng) action


import GlobalState from './2.reducers'

// import 'semantic-ui-css/semantic.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './support/fontawesome-free/css/fontawesome.min.css'
import './support/fontawesome-free/css/all.min.css';
import 'semantic-ui-css/semantic.min.css'


const varStore = createStore(GlobalState,{},applyMiddleware(ReduxThunk))
ReactDOM.render(
    <Provider store={varStore}>
<BrowserRouter>
    <App/>
</BrowserRouter>
    </Provider>

, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
