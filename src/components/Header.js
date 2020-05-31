import React, { Component } from 'react';
import { Link } from "react-router-dom";

import LinkMenu from "./LinkMenu";

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

  /*Readd this once we have HomeHistory HomeVideo enabled*/
  /*const bg = {
  
      Line: 53
      {
        url: "#laws",
        text: "Laws",
        type: "hash"
      },

      Line: 60
      {
        url: "#videos",
        text: "Videos",
        type: "hash"
      },
  }*/

  render() {
    const menus = [
      {
        url: "#news",
        text: "News",
        type: "hash"
      },
      
      {
        url: "#mission",
        text: "Mission",
        type: "hash"
      },
      
      {
        url: "/team",
        text: "Team",
        type: "link"
      },
      {
        url: "#donate",
        text: "Support Us",
        type: "hash"
      }
    ]
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
              {
                menus.map((menu, key) => {
                  return(
                    <LinkMenu url={menu.url} text={menu.text} type={menu.type} key={key} />
                  )
                })
              }
            </ul>
          </div>
        </div>
      </header>
    )
  }
}

export default Header;