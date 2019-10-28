import React, { Component } from 'react'
import HeadingAnimation from './HeadingAnimation';
import InViewMonitor from 'react-inview-monitor';

import Style from './HomeHistory.module.scss'

class HomeHistory extends Component {
    render() {
        return (
            <div style={{position: 'relative'}}>
                <div className={`${Style.container} container`}>
                    <div className={Style.historyLeft}>
                        <InViewMonitor classNameInView="animated-in">
                            <HeadingAnimation className={Style.title} delay={0} duration={0.7} color="#ffffff">
                                <h3>Legislative History</h3>
                            </HeadingAnimation>
                            <div className={Style.subTitle}>
                                <HeadingAnimation delay={0.2} duration={0.7} color="#ffffff">
                                    <span className="h1">Checkout</span>
                                </HeadingAnimation>
                                <HeadingAnimation delay={0.4} duration={0.7} color="#ffffff">
                                    <span className="h1">recent changes</span>
                                </HeadingAnimation> 
                            </div>
                            <p>The latest laws affecting the United Kingdom that are potentially invading your privacy and what you can do to help.</p>
                        </InViewMonitor>
                    </div>
                </div>
                <div className={Style.historyRight}>
                    <div className={Style.theHistory}>
                        <div className="historyItem">
                            <div className="top">
                                <h3>Help Us</h3>
                                <p>Spoted a new law?<br />let us know </p>
                            </div>
                        </div>
                        <div className="historyItem">
                            <div className="top">
                                <h3>Investigatory Powers Act</h3>
                                <p>Uk Public General Acts<br/>23rd May 2018</p>
                            </div>
                            <div className="bottom">
                                <p>
                                    <span>Sign This Petition</span>
                                    <span>212,723</span>
                                    <span>Signatures</span>
                                </p>
                            </div>
                        </div>
                        <div className="historyItem">
                            <div className="top">
                                <h3>Data Protection Act 2018</h3>
                                <p>Uk Public General Acts<br/>23rd May 2018</p>
                            </div>
                            <div className="bottom">
                                <p>
                                    <span>No Petition</span>
                                    <span>N/A</span>
                                    <span>Open Petition</span>
                                </p>
                            </div>
                        </div>
                        <div className="historyItem">
                            <div className="top">
                                <h3>Investigatory Powers Act</h3>
                                <p>Uk Public General Acts<br/>23rd May 2018</p>
                            </div>
                            <div className="bottom">
                                <p>
                                    <span>Sign This Petition</span>
                                    <span>212,723</span>
                                    <span>Signatures</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeHistory;