import React, { Component } from 'react'

import Style from './Button.module.scss'
import Arrow from '../assets/images/arrow-right.svg'
import Love from '../assets/images/ico-love.svg'

class Link extends Component {
    render() {
        return (
            <>
                {
                    this.props.type === "line" ?
                    (
                        <a href={this.props.url} className={`button ${Style.buttonLine}`} target={this.props.target}>
                            <span>{this.props.value}</span>
                            <img src={Love} alt="Love" className="love" />
                        </a>
                    ) : (
                        <a href={this.props.url} className={`button ${Style.button}`} target={this.props.target}>
                            <span>{this.props.value}</span>
                            <img src={Arrow} alt="arrow" className="arrow" />
                        </a>
                    )
                }
                
            </>
        );
    }
}

export default Link;

Link.defaultProps = {
    url: "#",
    target: "_self"
}