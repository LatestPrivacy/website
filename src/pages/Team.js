import React, { Component } from 'react'
import { Parallax } from 'react-scroll-parallax'
import InViewMonitor from 'react-inview-monitor'
import BodyTextAnimation from '../components/BodyTextAnimation'
import AboutStyle from './Team.module.scss'

import AboutBanner from '../components/AboutBanner'
import AboutMission from '../components/AboutMission'
import AboutAchieve from '../components/AboutAchieve'
import TitleAndDescription from '../components/TitleAndDescription'
import AboutTeam from '../components/AboutTeam'
import AboutTeamItem from '../components/AboutTeamItem'
import AboutJoin from '../components/AboutJoin'
import AboutJoinPosition from '../components/AboutJoinPosition'

import LukeImage from '../assets/images/Luke.jpg'
import JohnImage from '../assets/images/John.jpg'
import DaveImage from '../assets/images/Dave.jpg'
import RizqiImage from '../assets/images/Rizqi.jpg'
import noImage from '../assets/images/no-image.jpg'


class About extends Component {
    render() {
        const Team = [
            {
                image: LukeImage,
                name: 'Luke Seers',
                position: 'Lead Designer',
                github: 'https://github.com/lukeseers',
                twitter: 'https://twitter.com/LukeSeers',
                exlink: 'https://lukeseers.com'
            },
            {
                image: noImage,
                name: 'Myles',
                position: 'Back end Dev'
            },
            {
                image: DaveImage,
                name: 'David Weaver',
                position: 'Legal Advisor',
                github: 'https://github.com/Wrasse39'
            },
            {
                image: JohnImage,
                name: 'Johnaton Weaver',
                position: 'DevOps',
                github: 'https://github.com/8BallBomBom',
            },
            {
                image: RizqiImage,
                name: 'Rizqi Nizamil Putra',
                position: 'Front-end Dev',
                github: 'https://github.com/rizqinizamil',
                twitter: 'https://twitter.com/nizamilputra',
                exlink: 'https://rizqi.im'
            },
            {
                image: noImage,
                name: 'You',
                position: 'Open Positions'
            }
        ]

        const PastContributor = [
            {
                image: noImage,
                name: 'William Phillips',
                position: 'Front-end Dev',
                github: 'https://github.com/metallicgloss',
                twitter: 'https://twitter.com/MetallicGloss',
                exlink: 'https://www.william-phillips.com'
            }
        ]

        const OpenPosition = [
            {
                position: 'Art Director',
                status: 'Remote',
                url: '#'
            },
            {
                position: 'Copywriter',
                status: 'Remote',
                url: '#'
            },
            {
                position: 'Front-end Developer',
                status: 'Remote',
                url: '#'
            },
            {
                position: 'Content Writer',
                status: 'Remote',
                url: '#'
            }
        ]
        return (
            <div className={AboutStyle.wrapper}>
                <AboutBanner />

                <AboutMission title="Our Mission" desc="To raise public awareness surrounding the issues of privacy in 
                everyday use mobile device to desktops, if it’s relevant we will let 
                you know about it and guide you in the right direction." />
            
                <AboutAchieve title="What we want to achieve">
                    <div className={AboutStyle.achieveItemWrapper}>
                        <InViewMonitor classNameInView='animated-in'>
                            <BodyTextAnimation duration={0.7} delay={0.3}>
                                <TitleAndDescription className={AboutStyle.tadItem} title="01. Awareness" desc="To raise the level of public awareness as to what happens to their data."/>
                            </BodyTextAnimation>
                            <BodyTextAnimation duration={0.7} delay={0.6}>
                                <TitleAndDescription className={AboutStyle.tadItem} title="02. Privacy" desc="To aid the public in knowing exactly what privacy really means."/>
                            </BodyTextAnimation>
                            <BodyTextAnimation duration={0.7} delay={0.9}>
                                <TitleAndDescription className={AboutStyle.tadItem} title="03. Security" desc="Guiding the public in ways to stay secure whilst online."/>
                            </BodyTextAnimation>
                            <BodyTextAnimation duration={0.7} delay={1.2}>
                                <TitleAndDescription className={AboutStyle.tadItem} title="04. Human Rights" desc="Privacy is a basic human right, we are all entitled to it and we stand by that."/>
                            </BodyTextAnimation>
                        </InViewMonitor>
                    </div>
                </AboutAchieve>

                <AboutTeam title="Meet the team" desc="We’re a small team of people working towards the greater 
                good; built up around volunteers contributing to this project 
                in our free time at our own cost.">
                    {
                        Team.map((data, key) => {
                            return(
                                <AboutTeamItem
                                    image = {data.image}
                                    imgAlt = {data.name}
                                    name = {data.name}
                                    position = {data.position}
                                    github = {data.github}
                                    twitter = {data.twitter}
                                    exlink = {data.exlink}
                                    key = {key}
                                    delay = { 0.6 + (key * 0.3) }
                                />
                            )
                        })                         
                    }
                </AboutTeam>

                <AboutTeam title="Past contributors" desc="Team memebers who previously contributed to this project,
                who are no longer currently active.">
                    {
                        PastContributor.map((data, key) => {
                            return(
                                <AboutTeamItem
                                    image = {data.image}
                                    imgAlt = {data.name}
                                    name = {data.name}
                                    position = {data.position}
                                    github = {data.github}
                                    twitter = {data.twitter}
                                    exlink = {data.exlink}
                                    key = {key}
                                    delay = { 0.6 + (key * 0.3) }
                                />
                            )
                        })                         
                    }
                </AboutTeam>

                <AboutJoin title="Join our team" desc="Have you got what it takes to 
                be apart of the team?">
                    {
                        OpenPosition.map((data, key) => {
                            return(
                                <AboutJoinPosition
                                    position = {data.position}
                                    status = {data.status}
                                    url = {data.url}
                                    key = {key}
                                />
                            )
                        })                         
                    }
                </AboutJoin>
                <Parallax className={AboutStyle.parallaxTxt} x={[30, -60]} tagOuter="figure">
                    <div className={AboutStyle.privacyText}>Privacy</div>
                </Parallax>
            </div>
        );
    }
}

export default About;