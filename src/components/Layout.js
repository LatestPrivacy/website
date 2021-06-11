import React, { Component } from 'react';

import Header from './Header';
import Footer from './Footer';

class Layout extends Component {
	render() {
		return (
			<>
				<Header />
				{this.props.children}
				<Footer />
			</>
		);
	}
}

export default Layout;