import React, { Component } from 'react'
import CareerStyle from './Career.module.scss'

class Career extends Component {
    render() {
        return (
            <div className={ `${CareerStyle.wrapper} container` }>
                <div className={CareerStyle.top}>
                    <h1 className={CareerStyle.title}>Front-end Developer</h1>
                    <h6 className={CareerStyle.jobType}>Job type <span>Volunteer</span></h6>
                </div>

                <div className={CareerStyle.section}>
                    <h3>Who are we?</h3>
                    <p>A small group of people working to enhance the awreaeness of privacy protections 
                    to the genreal public. We are based around the world so we work all hours of the day 
                    and night, our small team tries our best to keep up with breaking privacy issuses on 
                    a daily basis, so we can let you know.</p>
                    <p>Privacy is a basic human right, Latest Privacy makes it easir for people to keep 
                    track of privacy related news and more.</p>
                </div>

                <div className={CareerStyle.section}>
                    <h3>What it is all about</h3>
                    <p>Our small team focuses on managing the ever growing amount of data based 
                    infomation, breaking down the complex issuses making it easier for the genreall 
                    public to understand and keep track.</p>
                </div>

                <div className={CareerStyle.section}>
                    <h3>Roles & Responsibilitites</h3>
                    <ul>
                        <li>Understanding og HTML, CSS and Javascript</li>
                        <li>Creating responvive web layouts</li>
                        <li>Understanding on how to use Github & Gitlab</li>
                        <li>Moderating Github Repos (Pretty easy)</li>
                    </ul>
                </div>

                <div className={CareerStyle.section}>
                    <h3>Degrees and Education</h3>
                    <p>A floppy peace of paper does not show how much understanding and skills youhave, 
                    we dont give a flying fuck about what degree or education you’ve got,experience of 
                    life goes a long way.</p>
                    <ul>
                        <li>Communitcating in English, helps, but you dont have to be perfect</li>
                    </ul>
                </div>

                <div className={CareerStyle.section}>
                    <h3>Work experience?</h3>
                    <p>You do not need any work experince at all.</p>
                    <p>Experience of life goes along away in this line of work, commuation skills
                    and team work are much more important then work experience.</p>
                </div>

                <div className={CareerStyle.section}>
                    <h3>What should I send to you?</h3>
                    <p>Pretty much everything which allows us to see your skill!</p>
                    <ul>
                        <li>Portfoilio (Website)</li>
                        <li>Gitlab, Github or other</li>
                        <li>Your name (First) and location (Country)</li>
                        <li>CV/Resume</li>
                    </ul>
                </div>

                <div className={CareerStyle.section}>
                    <h3>Thinking about not applying?</h3>
                    <p>Nothing ventured, nothing gained, if you do not apply you 
                    will never know. What is there to loose?</p>
                </div>

                <div className={CareerStyle.section}>
                    <h3>Email us</h3>
                    <p>We are a very relaxed team of down to earth people. Please dont be shysend us an email, we really would like to hear 
                    from you.</p>
                    <div className={CareerStyle.hasLink}>Contact Us: <a href="mailto:thelatestprivacy@protonmail.com">thelatestprivacy@protonmail.com</a></div>
                </div>
            </div>
        );
    }
}

export default Career;