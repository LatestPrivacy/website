import React, { Component } from 'react'

import JoinPositionStyle from './AboutJoinPosition.module.scss'
import Arrow from '../assets/images/arrow-right.svg'

class AboutJoinPosition extends Component {
    render() {
        return (
            <div className={JoinPositionStyle.wrapper}>
                <a href={this.props.url} className={JoinPositionStyle.link}>&nbsp;</a>
                <h4 className={JoinPositionStyle.position}>{this.props.position}</h4>
                <div className={JoinPositionStyle.status}>{this.props.status}</div>
                <img src={Arrow} alt={ `Open position for ${this.props.position}` } className={JoinPositionStyle.arrow}/>
            </div>
        );
    }
}

export default AboutJoinPosition;