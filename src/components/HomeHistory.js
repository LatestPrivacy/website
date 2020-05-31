import React, { Component } from 'react'
import BodyTextAnimation from '../components/BodyTextAnimation'
import InViewMonitor from 'react-inview-monitor'
import Section from '../components/Section'

import Style from './HomeHistory.module.scss'

class HomeHistory extends Component {
    render() {
        return (
            <div style={{position: 'relative'}} id="laws">
                <div className={`${Style.container} container`}>
                    <div className={Style.historyLeft}>
                        <Section
                            title = "Legislative History"
                            subtitle1 = "Checkout"
                            subtitle2 = "recent changes"
                            desc = "The latest laws affecting the United Kingdom that are potentially invading your privacy and what you can do to help."
                            button = "Coming Soon"
                        />
                    </div>
                </div>
                
                <InViewMonitor classNameInView={`${Style.historyRight} animated-in`} className={Style.historyRight}>
                    <BodyTextAnimation duration={0.7} delay={0} className={Style.theHistory}>
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
                    </BodyTextAnimation>
                </InViewMonitor>
            </div>
        )
    }
}

export default HomeHistory