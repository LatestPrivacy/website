import React, { Component } from 'react'
import AchieveStyle from './AboutAchieve.module.scss'
import HeadingAnimation from './HeadingAnimation';
import InViewMonitor from 'react-inview-monitor'
import { Watch } from 'scrollmonitor-react';

class AboutMission extends Component {
    render() {
        return (
            <InViewMonitor classNameInView='animated-in'>
                <div className={ `${AchieveStyle.container} container` }>
                    <HeadingAnimation className={AchieveStyle.title} duration={0.7} color="#ffffff" delay={0}>
                        <h1>{this.props.title}</h1>
                    </HeadingAnimation>
                    {this.props.children}
                </div>
            </InViewMonitor>
        );
    }
}

export default Watch(AboutMission);