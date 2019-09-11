import React, { Component } from 'react'
import { Parallax } from 'react-scroll-parallax';
import BlockRevealAnimation from 'react-block-reveal-animation';
import { Watch } from 'scrollmonitor-react';

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
                { this.props.isInViewport &&  
                    <h1 className={BannerStyle.Title}>
                        <BlockRevealAnimation delay={0} duration={0.3} color="#ffffff">We are</BlockRevealAnimation>
                        <BlockRevealAnimation delay={0.5} duration={0.5} color="#ffffff">a small team</BlockRevealAnimation> 
                        <BlockRevealAnimation delay={1} duration={0.5} color="#ffffff">that packs</BlockRevealAnimation>
                        <BlockRevealAnimation delay={1.5} duration={0.5} color="#ffffff">a punch.</BlockRevealAnimation>
                    </h1>
                }
                <Parallax className={BannerStyle.parallaxImg} y={[0, -20]} tagOuter="figure"
                disabled={
                    window.innerWidth < 768 ? true : false
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

export default Watch(AboutBanner);