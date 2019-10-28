import React, { Component } from 'react'
import HeadingAnimation from './HeadingAnimation';
import InViewMonitor from 'react-inview-monitor';

import Style from './HomeHistory.module.scss'

class HomeHistory extends Component {
    render() {
        return (
            <div className={`container`}>
                <InViewMonitor classNameInView="animated-in">
                    <HeadingAnimation className={Style.title} delay={0} duration={0.7} color="#ffffff">
                        <h3>Legislative History</h3>
                    </HeadingAnimation>
                </InViewMonitor>
            </div>
        );
    }
}

export default HomeHistory;