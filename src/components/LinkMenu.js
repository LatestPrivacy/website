import React, { Component } from 'react';
import { Link } from "react-router-dom";

class LinkMenu extends Component {
    render(){
        return(
            <li>
                <Link to={this.props.url}>{this.props.text}</Link>
            </li>
        )
    }
}

export default LinkMenu;