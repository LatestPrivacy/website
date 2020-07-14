import React, { Component } from 'react';

import BodyTextAnimation from '../components/BodyTextAnimation';
import InViewMonitor from 'react-inview-monitor';
import Section from '../components/Section';
import TitleAndDescription from '../components/TitleAndDescription';

import Style from './HomeMission.module.scss';

//import Cams from '../assets/images/cams.png';

class HomeMission extends Component {
    render() {
        /*Readd this once we have HomeHistory HomeVideo enabled*/
        /*Add style={bg} on line 18*/
        /*const bg = {
            backgroundImage: `url(${Cams})`
        }*/
        return (
            <div className={Style.missionContainer} id="mission"> 
                <div className={` ${Style.containerBanner} container`}>
                    <div className={Style.missionTop}>
                        <Section
                            title = "Our Mission"
                            subtitle1 = "We know how hard it is to keep track of"
                            subtitle2 = "privacy, we want to change that by"
                            subtitle3 = "making it easier to follow."
                        />
                    </div>
                    <div className={Style.missionBottom}>
                        <InViewMonitor classNameInView='animated-in'>
                            <BodyTextAnimation duration={0.7} delay={0.3}>
                                <TitleAndDescription className={Style.whatWeDoItem} title="Privacy" desc="By making privacy easier to follow it will help those who want to protect their rights."/>
                            </BodyTextAnimation>
                            <BodyTextAnimation duration={0.7} delay={0.6}>
                                <TitleAndDescription className={Style.whatWeDoItem} title="Awareness" desc="Spreading awareness doesn't just educate, but also helps to show the issues and risks we face in everyday life."/>
                            </BodyTextAnimation>
                            <BodyTextAnimation duration={0.7} delay={0.9}>
                                <TitleAndDescription className={Style.whatWeDoItem} title="Education" desc="Teaching people that privacy is not just important, it is a basic human right."/>
                            </BodyTextAnimation>
                        </InViewMonitor>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeMission;