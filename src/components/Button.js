import React, { Component } from 'react'
import { Link } from "react-router-dom";

import Style from './Button.module.scss'
import Arrow from '../assets/images/arrow-right.svg'

class Button extends Component {
    render() {
        return (
            <Link to={this.props.url} className={Style.button}>
                <span>{this.props.value}</span>
                <img src={Arrow} alt="arrow" class={Style.arrow}/>
            </Link>
        );
    }
}

export default Button;