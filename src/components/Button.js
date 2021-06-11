import React, { Component } from 'react'
import { Link } from "react-router-dom";

import Style from './Button.module.scss'
import Arrow from '../assets/images/arrow-right.svg'
import Love from '../assets/images/ico-love.svg'

class Button extends Component {
    render() {
        return (
            <>
                <Link to={this.props.url} className={`button ${this.props.type === "line" ? Style.buttonLine : Style.button}`}>
                    <span>{this.props.value}</span>
                    {this.props.type === "line"
                        ? <img src={Love} alt="Love" className="love" />
                        : <img src={Arrow} alt="arrow" className="arrow" />
                    }
                </Link>
            </>
        );
    }
}

export default Button;

Button.defaultProps = {
    url: "#",
    target: "_self"
}