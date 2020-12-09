import React from 'react'; //, { useState, useEffect } from 'react';
//import axios from 'axios';
import { Helmet } from 'react-helmet';

import { Parallax } from 'react-scroll-parallax';
import InViewMonitor from 'react-inview-monitor';
import BodyTextAnimation from '../components/BodyTextAnimation';

import AboutBanner from '../components/AboutBanner';
import AboutMission from '../components/AboutMission';
import AboutAchieve from '../components/AboutAchieve';
import TitleAndDescription from '../components/TitleAndDescription';
import AboutTeam from '../components/AboutTeam';
import AboutTeamItem from '../components/AboutTeamItem';
//import AboutJoin from '../components/AboutJoin';
//import AboutJoinPosition from '../components/AboutJoinPosition';

import AboutStyle from './Team.module.scss';

import LukeImage from '../assets/images/Luke.jpg';
import JohnImage from '../assets/images/John.jpg';
import DaveImage from '../assets/images/Dave.jpg';
import RizqiImage from '../assets/images/Rizqi.jpg';
import noImage from '../assets/images/no-image.jpg';

// Shuffle array
// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
// This really could be done a lot simpler... >.< code review
function shuffle( array ) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while ( 0 !== currentIndex ) {
        // Pick a remaining element...
        randomIndex = Math.floor( Math.random() * currentIndex );
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = array[ currentIndex ];
        array[ currentIndex] = array[ randomIndex ];
        array[ randomIndex] = temporaryValue;
    };

    return array;
};

/* When Myles has finished the team API
    ,
    {
        image: noImage,
        name: 'This could be you',
        position: 'Check open positions'
    }
*/

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
        image: DaveImage,
        name: 'David Weaver',
        position: 'Legal Advisor',
        github: 'https://github.com/Wrasse39'
    },
    {
        image: JohnImage,
        name: 'Johnathon Weaver',
        position: 'DevOps',
        github: 'https://github.com/8BallBomBom',
        twitter: 'https://twitter.com/8BallBomBom',
        exlink: 'https://bombom.dev'
    },
    {
        image: RizqiImage,
        name: 'Rizqi Nizamil Putra',
        position: 'Front-end Dev',
        github: 'https://github.com/rizqinizamil',
        twitter: 'https://twitter.com/nizamilputra',
        exlink: 'https://rizqi.im'
    }
];

const shuffleTeam = shuffle( Team );

const pastContributors = [
    {
        image: noImage,
        name: 'William Phillips',
        position: 'Front-end Dev',
        github: 'https://github.com/metallicgloss',
        twitter: 'https://twitter.com/MetallicGloss',
        exlink: 'https://www.william-phillips.com'
    }
];

const About = () => {
/* When Myles has finished the team API
	const [ data, setData ] = useState( [] );
	const [ loading, setLoading ] = useState( true );

	useEffect( () => {
		const fetchJobs = async () => {
			try {
				const response = await axios.get( '/api/jobs' );

				setData( data => response.data );
				setLoading( false );
			} catch( err ) {
				console.log( err );
			};
		};

		fetchJobs();
	}, [] );
*/

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
                        shuffleTeam.map((member, key) => {
                            return(
                                <AboutTeamItem
                                    image={member.image}
                                    imgAlt={member.name}
                                    name={member.name}
                                    position={member.position}
                                    github={member.github}
                                    twitter={member.twitter}
                                    exlink={member.exlink}
                                    key={key}
                                    delay={0.6 + (key * 0.3)}
                                />
                            )
                        })                         
                    }
                </AboutTeam>

                <AboutTeam title="Past contributors" desc="Team members who previously contributed to this project,
                who are no longer currently active.">
                    {
                        pastContributors.map((member, key) => {
                            return (
                                <AboutTeamItem
                                    image={member.image}
                                    imgAlt={member.name}
                                    name={member.name}
                                    position={member.position}
                                    github={member.github}
                                    twitter={member.twitter}
                                    exlink={member.exlink}
                                    key={key}
                                    delay={0.6 + (key * 0.3)}
                                />
                            )
                        })                         
                    }
                </AboutTeam>

                <Parallax className={AboutStyle.parallaxTxt} x={[30, -60]} tagOuter="figure">
                    <div className={AboutStyle.privacyText}>Privacy</div>
                </Parallax>
            </div>
        </>
    );
}

export default About;

/* When Myles has finished the team API
    <AboutJoin title="Join the team" desc="If you care about privacy please apply, we would love to hear from you!">
        {
            loading && <div>loading...</div>
        }
        {
            !data
            ? <div>didn't get any jobs yet?</div>
            : data.map((job, key) => {
                return(
                    <AboutJoinPosition
                        position={job.position}
                        status={job.status}
                        key={key}
                    />
                )
            })                         
        }
    </AboutJoin>
*/