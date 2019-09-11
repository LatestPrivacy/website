import React, { Component } from 'react'
import AchieveStyle from './AboutAchieve.module.scss'
import BlockRevealAnimation from 'react-block-reveal-animation';
import { Watch } from 'scrollmonitor-react';

class AboutMission extends Component {
    render() {
        return (
            <div className={ `${AchieveStyle.container} container` }>
                { this.props.isInViewport &&
                    <BlockRevealAnimation className={AchieveStyle.title} duration={0.3} color="#ffffff" delay={0.5}>
                        <h1>{this.props.title}</h1>
                    </BlockRevealAnimation>
                }
                {this.props.children}
            </div>
        );
    }
}

export default Watch(AboutMission);