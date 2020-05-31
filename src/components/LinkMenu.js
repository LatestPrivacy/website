import React, { Component } from 'react';
import { Link } from "react-router-dom";

class LinkMenu extends Component {
    render(){
        return(
            <li>
                { 
                    this.props.type === 'hash' ?
                    <a href={this.props.url}>{this.props.text}</a>
                    : <Link to={this.props.url}>{this.props.text}</Link>
                }
            </li>
        )
    }
}

export default LinkMenu;