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
        title: "Electronic Frontier Foundation",
        url: "https://www.eff.org/"
    },
    {
        image: logobbw,
        title: "Big Brother Watch",
        url: "https://bigbrotherwatch.org.uk/"
    },
    {
        image: logopi,
        title: "Privacy International",
        url: "https://privacyinternational.org/"
    },
    {
        image: logoorg,
        title: "Open Right Group",
        url: "https://www.openrightsgroup.org/"
    },
    {
        image: logoliberty,
        title: "Liberty",
        url: "https://www.libertyhumanrights.org.uk/"
    }
]

class HomeOrganisation extends Component {
    render() {
        return (
            <div className={`${Style.container} container`}>
                <InViewMonitor classNameInView="animated-in">
                    <HeadingAnimation className={Style.title} delay={0} duration={0.7} color="#ffffff">
                        <h3>Organisations</h3>
                    </HeadingAnimation>
                    <div className={Style.orgWrapper}>
                        {
                            itemSource.map((item, i) => {
                                return(
                                    <OrganisationItem 
                                        delay = { 0.6 + (i * 0.3) }
                                        image = { item.image }
                                        title = { item.title }
                                        url = { item.url }
                                        key = {i}
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