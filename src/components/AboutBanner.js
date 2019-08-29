import React, { Component } from 'react'
import BannerStyle from './AboutBanner.module.scss'

import winnerImg from '../assets/images/winner.jpg'

class AboutBanner extends Component {
    render() {
        return (
            <div className={ `${BannerStyle.container} container` }>
                <h1 className={BannerStyle.Title}>We are a small team that packs a punch.</h1>
                <img src={winnerImg} alt="We are a small team that packs a punch" className={BannerStyle.winnerImg}/>
                <div className={BannerStyle.shadowText}>creating awareness for our rights</div>
            </div>
        );
    }
}

export default AboutBanner;