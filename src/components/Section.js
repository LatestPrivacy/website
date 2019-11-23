import React, { Component } from 'react'
import HeadingAnimation from './HeadingAnimation'
import BodyTextAnimation from '../components/BodyTextAnimation'
import InViewMonitor from 'react-inview-monitor'
import Button from '../components/Button'

import Style from './Section.module.scss'

class Section extends Component {
    render() {
        return (
            <>
            <InViewMonitor classNameInView="animated-in">
                <HeadingAnimation className={Style.title} delay={0} duration={0.7} color="#ffffff">
                    <h3>{this.props.title}</h3>
                </HeadingAnimation>
                <div className={Style.subTitle}>
                    <HeadingAnimation delay={0.2} duration={0.7} color="#ffffff">
                        <span className="h1">{this.props.subtitle1}</span>
                    </HeadingAnimation>
                    <HeadingAnimation delay={0.4} duration={0.7} color="#ffffff">
                        <span className="h1">{this.props.subtitle2}</span>
                    </HeadingAnimation>
                    {
                        this.props.subtitle3 &&
                        <HeadingAnimation delay={0.6} duration={0.7} color="#ffffff">
                            <span className="h1">{this.props.subtitle3}</span>
                        </HeadingAnimation>
                    } 
                </div>
                <div className={Style.desc}>
                    <BodyTextAnimation delay={0.8} duration={0.7}>
                        <p>{this.props.desc}</p>
                    </BodyTextAnimation>
                </div>
                { 
                    this.props.button && 
                    <BodyTextAnimation delay={1} duration={0.7}>
                        <Button url="#" value={this.props.button} />
                    </BodyTextAnimation>
                }
            </InViewMonitor>
            </>
        )
    }
}

export default Section