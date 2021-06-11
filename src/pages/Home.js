import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import HomeBanner from '../components/HomeBanner';
import HomeNews from '../components/HomeNews';
import HomeOrganisation from '../components/HomeOrganisation';
import HomeMission from '../components/HomeMission';
import HomeDonate from '../components/HomeDonate';

//import HomeHistory from '../components/HomeHistory';
//import HomeVideo from '../components/HomeVideo';

import Style from './Home.module.scss';

import eye from '../assets/videos/eye.mp4';

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
                    <video className={Style.videoBG} autoPlay muted loop>
                        <source src={eye} type="video/mp4"/>
                    </video>
                    <HomeBanner />
                    <HomeNews />
                    <HomeOrganisation />
                    <HomeMission />
                    <HomeDonate />
                </div>
            </>
        );
    }
}

export default Home;