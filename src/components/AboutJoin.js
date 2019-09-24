import React, { Component } from 'react'
import HeadingAnimation from './HeadingAnimation';
import BodyTextAnimation from './BodyTextAnimation';
import InViewMonitor from 'react-inview-monitor'
import { Watch } from 'scrollmonitor-react';

import JoinStyle from './AboutJoin.module.scss'

class AboutJoin extends Component {
    render() {
        return (
            <InViewMonitor classNameInView='animated-in'>
                <div className={ `${JoinStyle.container} container` }>
                    <div className={JoinStyle.top}>
                        <HeadingAnimation className={JoinStyle.title} duration={0.7} color="#ffffff" delay={0}>
                            <h1>{this.props.title}</h1>
                        </HeadingAnimation>
                        <BodyTextAnimation duration={0.7} delay={0.3}>
                            <p>{this.props.desc}</p>
                        </BodyTextAnimation>
                        
                    </div>
                    <BodyTextAnimation duration={0.7} delay={0.6}>
                        {this.props.children}
                    </BodyTextAnimation>
                </div>
            </InViewMonitor>
            
        );
    }
}

export default Watch(AboutJoin);