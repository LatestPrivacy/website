import React, { Component } from 'react'
import BodyTextAnimation from '../components/BodyTextAnimation'
import HeadingAnimation from './HeadingAnimation'
import InViewMonitor from 'react-inview-monitor'
import Button from '../components/Button'

import Style from './HomeDonate.module.scss'

class HomeDonate extends Component {
    render() {
        return (
            <InViewMonitor classNameInView="animated-in">
                <div className={`${Style.donate} container`}>
                    <div className={Style.donateLeft}>
                        <HeadingAnimation className={Style.title} delay={0} duration={0.7} color="#ffffff">
                            <h3>Our Balance</h3>
                        </HeadingAnimation>

                        <HeadingAnimation className={Style.amount} delay={0.2} duration={0.7} color="#ffffff">
                            <h1>£13.64</h1>
                        </HeadingAnimation>
                        
                        <div className="donate__status">
                            <BodyTextAnimation delay={0.4} duration={0.7}>
                                <div className="donate__status__item">
                                    <span>2</span>
                                    <span>Donators</span>
                                </div>
                            </BodyTextAnimation>
                            <BodyTextAnimation delay={0.6} duration={0.7}>
                                <div className="donate__status__item">
                                    <span>42</span>
                                    <span>Transactions</span>
                                </div>
                            </BodyTextAnimation>
                        </div>
                    </div>
                    <div className={Style.donateRight}>
                        <HeadingAnimation className={Style.titleRight} delay={0.8} duration={0.7} color="#ffffff">
                            <h2>Transparency</h2>
                        </HeadingAnimation>
                        <BodyTextAnimation delay={1} duration={0.7}>
                            <p>We believe in being open about our funds, we will let you know where its from and where it will be spent.</p>
                        </BodyTextAnimation>
                        
                        <div className="donate__button">
                            <BodyTextAnimation delay={1.2} duration={0.7}>
                                <Button url="#" value="Coming Soon" />
                            </BodyTextAnimation>
                            <BodyTextAnimation delay={1.4} duration={0.7}>
                                <Button url="#" value="Donate" type="line" />
                            </BodyTextAnimation>
                        </div>
                    </div>
                </div>
            </InViewMonitor>
        )
    }
}

export default HomeDonate