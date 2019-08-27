import React, { Component } from 'react';
import { Link } from "react-router-dom";

import Logo from '../assets/images/Logo.png';
import HeaderStyle from './Header.module.scss';


class Header extends Component {
  render() {
    
    return(
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
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/donate">Donate</Link>
            </li>
          </ul>
        </div>
      </header>
    )
  }
}

export default Header;