import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './containers/App/';
import * as serviceWorker from './serviceWorker';
import store from './reducers/store';
import './index.css';


ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));

// https://bit.ly/CRA-PWA
// serviceWorker.register();
serviceWorker.unregister();
