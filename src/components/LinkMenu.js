import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { NavHashLink as NavLink } from 'react-router-hash-link';

class LinkMenu extends Component {
    render(){
        return(
            <li>
                { 
                    this.props.type === 'hash' ?
                    <NavLink
                        to={`/${this.props.url}`}
                        activeClassName="selected"
                        >{this.props.text}</NavLink>
                    : <Link to={this.props.url}>{this.props.text}</Link>
                }
            </li>
        )
    }
}

export default LinkMenu;