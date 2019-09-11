import React, { Component } from 'react'
import BlockRevealAnimation from 'react-block-reveal-animation';
import { Watch } from 'scrollmonitor-react';

import MissionStyle from './AboutMission.module.scss'

class AboutMission extends Component {
    
    render() {
        return (
            <div className={ `${MissionStyle.container} container` }>
                <div className={MissionStyle.wrapper}>
                    { this.props.isInViewport &&  
                        <BlockRevealAnimation className={MissionStyle.title} duration={0.3} color="#ffffff" delay={0.5}>
                            <h1>{this.props.title}</h1>
                        </BlockRevealAnimation>
                    }
                    <p>{this.props.desc}</p>
                </div>
            </div>
        );
    }
}

export default Watch(AboutMission);