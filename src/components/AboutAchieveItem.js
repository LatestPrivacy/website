import React, { Component } from 'react'
import AchieveItemStyle from './AboutAchieveItem.module.css'

class AboutAchieveItem extends Component {
    render() {
        return (
            <div className={AchieveItemStyle.col}>
                <h3 className={AchieveItemStyle.title}>{this.props.title}</h3>
                <p>{this.props.desc}</p>
            </div>
        )
    }
}

export default AboutAchieveItem;