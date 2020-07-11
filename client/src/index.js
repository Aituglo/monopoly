import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'mobx-react';
import {BrowserRouter} from 'react-router-dom';
import store from './store/Store';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

serviceWorker.unregister();
