import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

//import News from '../pages/News';

import Logo from '../assets/images/Logo.png';
import HeaderStyle from './Header.module.css';


class Header extends Component {
  render() {
    
    return(
      <Router>
        <header>
          <div className={`${HeaderStyle.container} container`}>
            <Link to="/" className={HeaderStyle.logo}>
              <img src={Logo} alt=""/>
            </Link>
            <ul className={HeaderStyle.menu}>
              <li>
                <Link to="/news">News</Link>
              </li>
              <li>
                <Link to="/videos">Videos</Link>
              </li>
              <li>
                <Link to="/laws">Laws</Link>
              </li>
              <li>
                <Link to="/donate">Donate</Link>
              </li>
            </ul>

            <Switch>
              <Route exact path="/" />
              <Route path="/news" />
              <Route path="/videos" />
              <Route path="/laws" />
              <Route path="/donate" />
            </Switch>
          </div>
        </header>
      </Router>
    )
  }
}

export default Header;