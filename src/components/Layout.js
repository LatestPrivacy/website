import React, { Component } from 'react'
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './Header'
import Footer from './Footer'

//import LayoutStyle from './Layout.module.css'

class Layout extends Component {
  render() {
    return(
      <div>
        <Header />
        { this.props.children }
        <Footer />
      </div>
    )
  }
}

export default Layout;