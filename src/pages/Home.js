import React, { Component } from 'react'
import {Helmet} from 'react-helmet'
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
            <>
                <Helmet>
                    <title>Latest Privacy - Keep track of privacy easily.</title>
                    <meta name="description" content="Latest Privacy (LP) is a non-profit aiming at making it easier to keep track of privacy related news, educational videos, laws and more..." />
                    <meta name="keywords" content="latest privacy, technology, security, privacy, surveillance, human rights, encryption, law, investigations, research, internet, united kingdom, GDPR, data protection, artificial intelligence" />
                </Helmet>
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
            </>
        );
    }
}

export default Home;