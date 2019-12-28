import React, { Component } from 'react'
import { Link } from "react-router-dom";

import Style from './Button.module.scss'
import Arrow from '../assets/images/arrow-right.svg'
import Love from '../assets/images/ico-love.svg'

class Button extends Component {
    render() {
        return (
            <>
                {
                    this.props.type === "line" ?
                    (
                        <Link to={this.props.url} className={Style.buttonLine}>
                            <span>{this.props.value}</span>
                            <img src={Love} alt="Love" class="love" />
                        </Link>
                    ) : (
                        <Link to={this.props.url} className={Style.button}>
                            <span>{this.props.value}</span>
                            <img src={Arrow} alt="arrow" class="arrow" />
                        </Link>
                    )
                }
                
            </>
        );
    }
}

export default Button;