import React, { Component } from 'react';
import { Link } from "react-router-dom";

import Logo from '../assets/images/Logo.png';
import github from '../assets/images/github.svg'
import twitter from '../assets/images/twitter.svg'

import HeaderStyle from './Header.module.scss';


class Header extends Component {
  constructor(props) {
    super(props);
  
    this.addActiveClass= this.addActiveClass.bind(this);
    this.state = {
      isActive: false
    }
  }
  addActiveClass() {
    console.log('click')
    this.setState({
      isActive: !this.state.isActive
    })
  }

  render() {
    return(
      <header>
        <div className={`${HeaderStyle.container} container`}>
          <Link to="/" className={HeaderStyle.logo}>
            <img src={Logo} alt=""/>
          </Link>
          <div className={HeaderStyle.menuWrap}>
            <ul className={HeaderStyle.social}>
              <li>
                <a href="https://twitter.com/Latest_Privacy">
                  <img src={twitter} alt="Latestprivacy on Twitter"/>
                </a>
              </li>
              <li>
                <a href="https://github.com/LatestPrivacy">
                  <img src={github} alt="Latestprivacy on Github"/>
                </a>
              </li>
            </ul>
            <div id="js-mobile-btn" className={ this.state.isActive ? `${HeaderStyle.ham} ${HeaderStyle.hamActive}` : HeaderStyle.ham } onClick={this.addActiveClass}>
              <span></span>
            </div>
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
          </div>
        </div>
      </header>
    )
  }
}

export default Header;