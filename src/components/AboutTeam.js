import React, { Component } from 'react'
import BlockRevealAnimation from 'react-block-reveal-animation';
import { Watch } from 'scrollmonitor-react';

import TeamStyle from './AboutTeam.module.scss'

class AboutTeam extends Component {
    render() {
        return (
            <div className={ `${TeamStyle.container} container` }>
                <div className={TeamStyle.top}>
                    { this.props.isInViewport &&
                        <BlockRevealAnimation className={TeamStyle.title} duration={0.3} color="#ffffff" delay={0.5}>
                            <h1>{this.props.title}</h1>
                        </BlockRevealAnimation>
                    }
                    <p>{this.props.desc}</p>
                </div>
                <div className={TeamStyle.teamWrapper}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Watch(AboutTeam);