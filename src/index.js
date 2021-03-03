import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './Components/Routes';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import reducer from './Reducers'
import { Provider } from 'react-redux'
import { createStore } from 'redux';


const store = createStore(reducer);


ReactDOM.render(
<Provider store={store}>
<Router><Routes></Routes></Router>
</Provider>, document.getElementById('root'));
serviceWorker.unregister();
