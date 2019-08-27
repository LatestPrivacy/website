import React, { Component } from 'react'
import MissionStyle from './AboutMission.module.scss'

class AboutMission extends Component {
    render() {
        return (
            <div className={ `${MissionStyle.container} container` }>
                <div className={MissionStyle.wrapper}>
                    <h1 className={MissionStyle.title}>{this.props.title}</h1>
                    <p>{this.props.desc}</p>
                </div>
            </div>
        );
    }
}

export default AboutMission;