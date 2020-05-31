import React, { Component } from 'react'
import {Helmet} from 'react-helmet'
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

// Shuffle array
// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}
  
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
        name: 'This could be you',
        position: 'Check open positions'
    }
]
const shuffleTeam = shuffle(Team)

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

class About extends Component {
    state = {
        loading: true,
        jobsData: null
    }

    async componentDidMount(){
        const url = "https://private-anon-bae8f28881-peepingtom.apiary-mock.com/api/v1/jobs"
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        this.setState({
            loading: false,
            jobsData: data
        })
    }

    render() {
        return (
            <>
                <Helmet>
                    <title>Latest Privacy - Team</title>
                    <meta name="description" content="About the team who are behind Latest Privacy." />
                    <meta name="keywords" content="latest privacy, technology, security, privacy, surveillance, human rights, encryption, law, investigations, research, internet, united kingdom, GDPR, data protection, artificial intelligence" />
                </Helmet>
                <div className={AboutStyle.wrapper}>
                    <AboutBanner />

                    <AboutMission title="Our Mission" desc="To raise public awareness surrounding the issues of privacy in everyday life. If it's relevant we will let you know about it and guide you in the right direction." />
                
                    <AboutAchieve title="What we want to achieve">
                        <div className={AboutStyle.achieveItemWrapper}>
                            <InViewMonitor classNameInView='animated-in'>
                                <BodyTextAnimation duration={0.7} delay={0.3}>
                                    <TitleAndDescription className={AboutStyle.tadItem} title="Awareness" desc="To raise the level of public awareness as to what happens to their data."/>
                                </BodyTextAnimation>
                                <BodyTextAnimation duration={0.7} delay={0.6}>
                                    <TitleAndDescription className={AboutStyle.tadItem} title="Privacy" desc="To aid the public in knowing exactly what privacy really means."/>
                                </BodyTextAnimation>
                                <BodyTextAnimation duration={0.7} delay={0.9}>
                                    <TitleAndDescription className={AboutStyle.tadItem} title="Security" desc="Guiding the public in ways to stay secure whilst online."/>
                                </BodyTextAnimation>
                                <BodyTextAnimation duration={0.7} delay={1.2}>
                                    <TitleAndDescription className={AboutStyle.tadItem} title="Human Rights" desc="Privacy is a basic human right, we are all entitled to it and we stand by that."/>
                                </BodyTextAnimation>
                            </InViewMonitor>
                        </div>
                    </AboutAchieve>

                    <AboutTeam title="Meet the team" desc="Small group of people working towards an endgame where privacy really does mean private. We are all volunteers contributing to this project in our free time at our own cost.">
                        {
                            shuffleTeam.map((data, key) => {
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

                <AboutJoin title="Join the team" desc="If you care about privacy please apply, we would love to hear from you!">
                    {
                        this.state.loading && <div>loading...</div>
                    }
                    {
                        //console.log(this.state)
                        !this.state.jobsData ? <div>didn't get a news data</div> :
                        this.state.jobsData.map((data, key) => {
                            return(
                                <AboutJoinPosition
                                    position = {data.position}
                                    status = {data.status}
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

                   
        </>
        );
    }
}

export default About;