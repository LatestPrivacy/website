import React, { Component } from 'react'
import HeadingAnimation from './HeadingAnimation';
import InViewMonitor from 'react-inview-monitor';
import OrganisationItem from './OrganisationItem'

import Style from './HomeOrganisation.module.scss'

import logoeff from '../assets/images/logo-eff.png'
import logobbw from '../assets/images/logo-bbw.png'
import logopi from '../assets/images/logo-pi.png'
import logoorg from '../assets/images/logo-org.png'
import logoliberty from '../assets/images/logo-liberty.png'

const itemSource = [
    {
        image: logoeff,
        title: "Electronic Frontier Foundation"
    },
    {
        image: logobbw,
        title: "Big Brother Watch"
    },
    {
        image: logopi,
        title: "Privacy International"
    },
    {
        image: logoorg,
        title: "Open Right Group"
    },
    {
        image: logoliberty,
        title: "Liberty"
    }
]

class HomeOrganisation extends Component {
    render() {
        return (
            <div className={`${Style.container} container`}>
                <InViewMonitor classNameInView="animated-in">
                    <HeadingAnimation className={Style.title} delay={0} duration={0.7} color="#ffffff">
                        <h3>Organisation</h3>
                    </HeadingAnimation>
                    <div className={Style.orgWrapper}>
                        {
                            itemSource.map((item, i) => {
                                return(
                                    <OrganisationItem 
                                        delay = { 0.6 + (i * 0.3) }
                                        image = { item.image }
                                        title = { item.title }
                                    />
                                )
                            })
                        }
                    </div>
                </InViewMonitor>
            </div>
        );
    }
}

export default HomeOrganisation;