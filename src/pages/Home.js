import React, { Component } from 'react'
import HomeBanner from '../components/HomeBanner'
import HomeNews from '../components/HomeNews'
import HomeOrganisation from '../components/HomeOrganisation'
import HomeHistory from '../components/HomeHistory'
import HomeMission from '../components/HomeMission'
import HomeVideo from '../components/HomeVideo'
import HomeDonate from '../components/HomeDonate'

import video from '../assets/eye.mp4'

import Style from './Home.module.scss'

class Home extends Component {
    render() {
        return (
            <div className={Style.wrapper}>
                <video class={Style.videoBG} autoPlay muted loop>
                    <source src={video} type="video/mp4" />
                </video>
                
                <HomeBanner />
                <HomeNews />
                <HomeOrganisation />
                <HomeHistory />
                <HomeMission />
                <HomeVideo />
                <HomeDonate />
            </div>
        );
    }
}

export default Home;