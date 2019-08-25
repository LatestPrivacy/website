import React, { Component } from 'react'

import TeamItemStyle from './AboutTeamItem.module.css'
import github from '../assets/images/github.svg'
import twitter from '../assets/images/twitter.svg'
import exlink from '../assets/images/external-link.svg'

class AboutMission extends Component {
    render() {
        return (
            <div className={TeamItemStyle.col}>
                <div className={TeamItemStyle.imgWrap}>
                    <img src={this.props.image} alt={this.props.imgAlt} />
                </div>
                <h5 className={TeamItemStyle.name}>{this.props.name}</h5>
                <h6 className={TeamItemStyle.position}>{this.props.position}</h6>
                <ul className={TeamItemStyle.social}>
                    { this.props.github && (
                        <li className={TeamItemStyle.github}>
                            <a href={this.props.github} target="_blank" rel="noopener noreferrer">
                                <img src={github} alt={ `${this.props.name} github` }/>
                            </a>
                        </li>
                    )}
                    
                    { this.props.twitter && (
                        <li className={TeamItemStyle.twitter}>
                            <a href={this.props.twitter} target="_blank" rel="noopener noreferrer">
                                <img src={twitter} alt={ `${this.props.name} twitter` }/>
                            </a>
                        </li>
                    )}

                    { this.props.exlink && (
                        <li className={TeamItemStyle.exlink}>
                            <a href={this.props.exlink} target="_blank" rel="noopener noreferrer">
                                <img src={exlink} alt={ `${this.props.exlink} link` }/>
                            </a>
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

export default AboutMission;