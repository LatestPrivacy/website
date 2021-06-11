import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { ParallaxProvider } from 'react-scroll-parallax';

import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

const rootEl = document.getElementById( 'root' );

ReactDOM.render(
	<BrowserRouter>
		<ParallaxProvider>
			<App />
		</ParallaxProvider>
	</BrowserRouter>,
	rootEl
);

if ( module.hot ) {
	module.hot.accept( './App', () => {
		const NextApp = require( './App' ).default;
		ReactDOM.render(
			<NextApp />,
			rootEl
		);
	} );
};

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();