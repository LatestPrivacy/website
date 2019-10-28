import React, { Component } from 'react'
import HomeBanner from '../components/HomeBanner'
import HomeNews from '../components/HomeNews'
import HomeOrganisation from '../components/HomeOrganisation'
import HomeHistory from '../components/HomeHistory'

import Style from './Home.module.scss'

class Home extends Component {
    render() {
        return (
            <div className={Style.wrapper}>
                <HomeBanner />
                <HomeNews />
                <HomeOrganisation />
                <HomeHistory />
            </div>
        );
    }
}

export default Home;