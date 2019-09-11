import React, { Component } from 'react'
import BlockRevealAnimation from 'react-block-reveal-animation';
import { Watch } from 'scrollmonitor-react';

import JoinStyle from './AboutJoin.module.scss'

class AboutJoin extends Component {
    render() {
        return (
            <div className={ `${JoinStyle.container} container` }>
                <div className={JoinStyle.top}>
                    { this.props.isInViewport &&
                        <BlockRevealAnimation className={JoinStyle.title} duration={0.3} color="#ffffff" delay={0.5}>
                            <h1>{this.props.title}</h1>
                        </BlockRevealAnimation>
                    }
                    <p>{this.props.desc}</p>
                </div>
                {this.props.children}
            </div>
        );
    }
}

export default Watch(AboutJoin);