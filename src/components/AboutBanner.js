import React, { Component } from 'react'
import { Parallax } from 'react-scroll-parallax';
import HeadingAnimation from './HeadingAnimation';
import InViewMonitor from 'react-inview-monitor';

import BannerStyle from './AboutBanner.module.scss'

import winnerImg from '../assets/images/winner.jpg'

class AboutBanner extends Component {
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
            <div className={ `${BannerStyle.container} container` }> 
                    <h1 className={BannerStyle.Title}>
                        <InViewMonitor classNameInView="animated-in">
                            <HeadingAnimation delay={0} duration={0.7} color="#ffffff">We are</HeadingAnimation>
                            <HeadingAnimation delay={0.2} duration={0.7} color="#ffffff">a small team</HeadingAnimation> 
                            <HeadingAnimation delay={0.4} duration={0.7} color="#ffffff">that packs</HeadingAnimation>
                            <HeadingAnimation delay={0.6} duration={0.7} color="#ffffff">a punch.</HeadingAnimation>
                        </InViewMonitor>
                    </h1>
                <Parallax className={BannerStyle.parallaxImg} y={[0, -20]} tagOuter="figure"
                disabled={
                    this.state.width < 768 ? true : false
                }
                >
                    <img src={winnerImg} alt="We are a small team that packs a punch" className={BannerStyle.winnerImg}/>
                </Parallax>
                <Parallax className={BannerStyle.parallaxTxt} y={[30, -60]} tagOuter="figure">
                    <div className={BannerStyle.shadowText}>creating awareness for our rights</div>
                </Parallax>
            </div>
        );
    }
}

export default AboutBanner;