import React, { Component } from 'react'
import HeadingAnimation from './HeadingAnimation';
import InViewMonitor from 'react-inview-monitor';
import BodyTextAnimation from '../components/BodyTextAnimation'
import TitleAndDescription from '../components/TitleAndDescription'
import Button from '../components/Button'

import Style from './HomeBanner.module.scss'

class HomeBanner extends Component {
    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }
    
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }
    
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
    
    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }
    render() {
        return (
            <div className={` ${Style.containerBanner} container`}>
                <div className={Style.BannerLeft}>
                    <InViewMonitor classNameInView="animated-in">
                        <div className={Style.Title}>
                            <HeadingAnimation delay={0} duration={0.7} color="#ffffff">
                                <span className={Style.h1}>Keep track</span>
                            </HeadingAnimation>
                            <HeadingAnimation delay={0.2} duration={0.7} color="#ffffff">
                                <span className={Style.h1}>of Privacy</span>
                            </HeadingAnimation> 
                        </div>
                        <BodyTextAnimation duration={0.7} delay={0.5}>
                            <p>Your data is potentially being watched even though you've 
                            done nothing wrong, if you don't want to be treated like
                            a criminal.</p>
                        </BodyTextAnimation>
                        <BodyTextAnimation duration={0.7} delay={0.8}>
                            <Button url="#" value="Explore Now" />
                        </BodyTextAnimation>
                    </InViewMonitor>
                </div>
                <div className={Style.whatWeDo}>
                    <InViewMonitor classNameInView='animated-in'>
                        <BodyTextAnimation duration={0.7} delay={0.3}>
                            <TitleAndDescription className={Style.whatWeDoItem} title="News" desc="To raise the level of public awareness as to what happens to their data."/>
                        </BodyTextAnimation>
                        <BodyTextAnimation duration={0.7} delay={0.9}>
                            <TitleAndDescription className={Style.whatWeDoItem} title="Laws" desc="To raise the level of public awareness as to what happens to their data."/>
                        </BodyTextAnimation>
                        <BodyTextAnimation duration={0.7} delay={0.6}>
                            <TitleAndDescription className={Style.whatWeDoItem} title="Education" desc="To aid the public in knowing exactly what privacy really means."/>
                        </BodyTextAnimation>
                        <BodyTextAnimation duration={0.7} delay={1.2}>
                            <TitleAndDescription className={Style.whatWeDoItem} title="Awareness" desc="To aid the public in knowing exactly what privacy really means."/>
                        </BodyTextAnimation>
                    </InViewMonitor>
                </div>
            </div>
        );
    }
}

export default HomeBanner;