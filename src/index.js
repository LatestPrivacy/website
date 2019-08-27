import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const rootEl = document.getElementById('root')

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    rootEl
)

if (module.hot) {
    module.hot.accept('./App', () => {
        const NextApp = require('./App').default
        ReactDOM.render(
            <NextApp />,
            rootEl
        )
    })
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
