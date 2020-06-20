import React, { useState, useEffect } from 'react'

import axios from 'axios'

import BodyTextAnimation from '../components/BodyTextAnimation'
import HeadingAnimation from './HeadingAnimation'
import InViewMonitor from 'react-inview-monitor'
import ButtonExternal from '../components/ButtonExternal'

import Style from './HomeDonate.module.scss'

const HomeDonate = () => {
    
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get("/donate/latestprivacy.json")
            .then(res => {
                setData(res.data)
                setLoading(false)
                //setTimeout(() => setLoading(false), 3000)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    if (!data) {
        return <div style={{ 'textAlign': 'center'}}>didn't get a news data</div>;
    }

    return (
        <InViewMonitor classNameInView="animated-in">
            <div className={`${Style.donate} container`} id="donate">
                <div className={Style.donateLeft}>
                    <HeadingAnimation className={Style.title} delay={0} duration={0.7} color="#ffffff">
                        <h3>Our Balance</h3>
                    </HeadingAnimation>
                    <br />
                    <HeadingAnimation className={Style.amount} delay={0.2} duration={0.7} color="#ffffff">
                        <h1>£{data.balance / 100}</h1>
                    </HeadingAnimation>
                    
                    <div className="donate__status">
                        <BodyTextAnimation delay={0.4} duration={0.7}>
                            <div className="donate__status__item">
                                <span>{data.backersCount}</span>
                                <span>Donators</span>
                            </div>
                        </BodyTextAnimation>
                        <BodyTextAnimation delay={0.6} duration={0.7}>
                            <div className="donate__status__item">
                                <span>0</span>
                                <span>Sponsors</span>
                            </div>
                        </BodyTextAnimation>
                    </div>
                </div>
                <div className={Style.donateRight}>
                    <HeadingAnimation className={Style.titleRight} delay={0.8} duration={0.7} color="#ffffff">
                        <h2>Public Funding Transparency</h2>
                    </HeadingAnimation>
                    <BodyTextAnimation delay={1} duration={0.7}>
                        <p>We believe in being open about the public funds we receive. You can see where it's from and also where it's being spent.</p>
                    </BodyTextAnimation>
                    
                    <div className="donate__button">
                        <BodyTextAnimation delay={1.2} duration={0.7}>
                        <ButtonExternal url="https://opencollective.com/latestprivacy/updates" value="Our Blogs"/>
                        </BodyTextAnimation>
                        <BodyTextAnimation delay={1.4} duration={0.7}>
                            <ButtonExternal url="https://opencollective.com/latestprivacy#section-contribute" value="Support Us" type="line" />
                        </BodyTextAnimation>
                    </div>
                </div>
            </div>
        </InViewMonitor>
    )
}

export default HomeDonate