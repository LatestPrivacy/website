import React, { Component } from 'react'
import HeadingAnimation from './HeadingAnimation';
import BodyTextAnimation from './BodyTextAnimation';
import { Watch } from 'scrollmonitor-react';
import InViewMonitor from 'react-inview-monitor'

import MissionStyle from './AboutMission.module.scss'

class AboutMission extends Component {
    
    render() {
        return (
            <InViewMonitor classNameInView='animated-in'>
                <div className={ `${MissionStyle.container} container` }>
                    <div className={MissionStyle.wrapper}>
                        <HeadingAnimation className={MissionStyle.title} duration={0.7} color="#ffffff" delay={0}>
                            <h1>{this.props.title}</h1>
                        </HeadingAnimation>
                        <BodyTextAnimation duration={0.7} delay={0.3}>
                            <p>{this.props.desc}</p>
                        </BodyTextAnimation>
                    </div>
                </div>
            </InViewMonitor>
        );
    }
}

export default Watch(AboutMission);