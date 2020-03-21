import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import App from './containers/App/';
import * as serviceWorker from './serviceWorker';
import { store, persistor } from './reducers/store';
import './index.css';


ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>, document.getElementById('root')
);

// https://bit.ly/CRA-PWA
serviceWorker.register();
// serviceWorker.unregister();
