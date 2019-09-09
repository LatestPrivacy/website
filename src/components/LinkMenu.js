import React, { Component } from 'react';
import { Link } from "react-router-dom";

import LinkMenuStyle from "./LinkMenu.module.scss"

class LinkMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {hover: true};
    
        // This binding is necessary to make `this` work in the callback
        this.toggleHover = this.toggleHover.bind(this);
    }
    toggleHover() {
        this.setState(state => ({
            hover: !state.hover
        }));
        console.log(this.state.hover);
    }
    render(){
        return(
            <li 
            onMouseEnter={this.toggleHover}
            onMouseLeave={this.toggleHover} >
                <Link to={this.props.url}>{this.props.text}</Link>
                <div 
                    className={`
                        ${LinkMenuStyle.menuBorder}
                        ${this.state.hover ? LinkMenuStyle.menuBorderHide : LinkMenuStyle.menuBorderShow}
                    `}
                >
                    <span></span>
                </div>
            </li>
        )
    }
}

export default LinkMenu;