import React, { Component } from 'react'
import BlockRevealAnimation from 'react-block-reveal-animation';
import { Watch } from 'scrollmonitor-react';

import AchieveItemStyle from './AboutAchieveItem.module.scss'

class AboutAchieveItem extends Component {
    render() {
        return (
            <div className={AchieveItemStyle.col}>
                { this.props.isInViewport &&
                    <BlockRevealAnimation className={AchieveItemStyle.title} duration={0.3} color="#ffffff" delay={0.5}>
                        <h3>{this.props.title}</h3>
                    </BlockRevealAnimation>
                }
                <p>{this.props.desc}</p>
            </div>
        )
    }
}

export default Watch(AboutAchieveItem);