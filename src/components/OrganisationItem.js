import React, { Component } from 'react'
import BodyTextAnimation from '../components/BodyTextAnimation'

import Style from './NewsItem.module.scss'

class OrganisationItem extends Component {
    render() {
        return (
            <BodyTextAnimation duration={0.7} delay={this.props.delay}>
                <div className={Style.newsItem}>
                    <img src={this.props.image} alt={this.props.title} />
                </div>
            </BodyTextAnimation>
        );
    }
}

export default OrganisationItem;