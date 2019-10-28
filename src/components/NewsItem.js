import React, { Component } from 'react'
import BodyTextAnimation from '../components/BodyTextAnimation'

import Style from './NewsItem.module.scss'

class NewsItem extends Component {
    render() {
        return (
            <BodyTextAnimation duration={0.7} delay={this.props.delay}>
                <div className={Style.newsItem}>
                    <div className={Style.author}>
                        <span>Author </span><span>{this.props.author}</span>
                    </div>
                    <div className={Style.newsTitle}>{this.props.children}</div>
                    <div className={Style.meta}>
                        <span>{this.props.date} </span>
                        &bull;
                        <span> {this.props.timetoread}</span>
                    </div>
                </div>
            </BodyTextAnimation>
        );
    }
}

export default NewsItem;