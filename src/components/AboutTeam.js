import React, { Component } from 'react'
import HeadingAnimation from './HeadingAnimation';
import BodyTextAnimation from './BodyTextAnimation';
import InViewMonitor from 'react-inview-monitor'
import { Watch } from 'scrollmonitor-react';

import TeamStyle from './AboutTeam.module.scss'

class AboutTeam extends Component {
    render() {
        return (
            <InViewMonitor classNameInView='animated-in'>
                <div className={ `${TeamStyle.container} container` }>
                    <div className={TeamStyle.top}>
                        <HeadingAnimation className={TeamStyle.title} duration={0.7} color="#ffffff" delay={0}>
                            <h1>{this.props.title}</h1>
                        </HeadingAnimation>
                        <BodyTextAnimation duration={0.7} delay={0.3}>
                            <p>{this.props.desc}</p>
                        </BodyTextAnimation>
                        
                    </div>
                    <BodyTextAnimation duration={0.7} delay={0.6}>
                        <div className={TeamStyle.teamWrapper}>
                            {this.props.children}
                        </div>
                    </BodyTextAnimation>
                    
                </div>
            </InViewMonitor>
        );
    }
}

export default Watch(AboutTeam);