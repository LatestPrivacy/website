import React from 'react';
import Layout from './components/Layout';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import About from './pages/About';
import Home from './pages/Home';
import News from './pages/News';
import Donate from './pages/Donate';
import Videos from './pages/Videos';
import Laws from './pages/Laws';
import Career from './pages/Career';

import './App.css';

function App() {
  return (
    <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/news" component={News} />
            <Route path="/videos" component={Videos} />
            <Route path="/laws" component={Laws} />
            <Route path="/donate" component={Donate} />
            <Route path="/career" component={Career} />
          </Switch>
        </Layout>
    </Router>
  );
}

export default App;
