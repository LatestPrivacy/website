import React, { Component } from 'react'
import { Watch } from 'scrollmonitor-react'

import AchieveItemStyle from './AboutAchieveItem.module.scss'

class AboutAchieveItem extends Component {
    render() {
        return (
            <div className={AchieveItemStyle.col}>
                
                    <div className={AchieveItemStyle.title} duration={0.3} color="#ffffff" delay={0.5}>
                        <h3>{this.props.title}</h3>
                    </div>
                
                <p>{this.props.desc}</p>
            </div>
        )
    }
}

export default Watch(AboutAchieveItem);