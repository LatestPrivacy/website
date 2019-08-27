import React, { Component } from 'react'
import AchieveStyle from './AboutAchieve.module.scss'

class AboutMission extends Component {
    render() {
        return (
            <div className={ `${AchieveStyle.container} container` }>
                <h1 className={AchieveStyle.title}>{this.props.title}</h1>
                {this.props.children}
            </div>
        );
    }
}

export default AboutMission;