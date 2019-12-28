import React, { Component } from 'react'
import BodyTextAnimation from '../components/BodyTextAnimation'
import InViewMonitor from 'react-inview-monitor'
import Section from '../components/Section'
import TitleAndDescription from '../components/TitleAndDescription'

import Style from './HomeMission.module.scss'
import Cams from '../assets/images/cams.png';

class HomeMission extends Component {
    render() {
        const bg = {
            backgroundImage: `url(${Cams})`
        }
        return (
            <div className={Style.missionContainer} style={bg}>
                <div className={` ${Style.containerBanner} container`}>
                    <div className={Style.missionTop}>
                        <Section
                            title = "Our Mission"
                            subtitle1 = "Many countries are starting to destroy"
                            subtitle2 = "privacy, while taking away our rights."
                            subtitle3 = "We want to change that."
                        />
                    </div>
                    <div className={Style.missionBottom}>
                        <InViewMonitor classNameInView='animated-in'>
                            <BodyTextAnimation duration={0.7} delay={0.3}>
                                <TitleAndDescription className={Style.whatWeDoItem} title="Privacy" desc="The latest laws affecting the United Kingdom that are potentially invading your privacy and what you can do to help."/>
                            </BodyTextAnimation>
                            <BodyTextAnimation duration={0.7} delay={0.6}>
                                <TitleAndDescription className={Style.whatWeDoItem} title="Awareness" desc="The latest laws affecting the United Kingdom that are potentially invading your privacy and what you can do to help."/>
                            </BodyTextAnimation>
                            <BodyTextAnimation duration={0.7} delay={0.9}>
                                <TitleAndDescription className={Style.whatWeDoItem} title="Education" desc="To aid the public in knowing exactly what privacy really means."/>
                            </BodyTextAnimation>
                        </InViewMonitor>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeMission;