import React from 'react';
import Layout from './components/Layout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Team from './pages/Team';
import Home from './pages/Home';
import News from './pages/News';
import NewsDetail from './pages/NewsDetail';
import Donate from './pages/Donate';
import Videos from './pages/Videos';
import Laws from './pages/Laws';
import Career from './pages/Career';
import TermsAndConditions from './pages/TermsAndConditions';
import NotFoundPage from './components/NotFoundPage';

import './App.css';

function App() {
	return (
		<Router forceRefresh>
			<Layout>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/team" component={Team} />
					<Route path="/news" component={News} />
					<Route path="/article/:slug" component={NewsDetail} />
					<Route path="/videos" component={Videos} />
					<Route path="/laws" component={Laws} />
					<Route path="/donate" component={Donate} />
					<Route path="/career" component={Career} />
					<Route path="/terms-and-conditions" component={TermsAndConditions} />
					<Route path="*" component={NotFoundPage} />
				</Switch>
			</Layout>
		</Router>
	);
}

export default App;
