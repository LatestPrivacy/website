import React, { Component } from 'react'
import HeadingAnimation from './HeadingAnimation';
import InViewMonitor from 'react-inview-monitor';
import BodyTextAnimation from '../components/BodyTextAnimation'
import NewsItem from '../components/NewsItem'
import Button from '../components/Button'

import Style from './HomeNews.module.scss'

const newsSource = [
    {
        author: "Latest Privacy",
        date: "12 apr 2019",
        timetoread: "15 mins read",
        content: "US capital's surveillance cam network allegedly hijacked by romanian ransomware suspects"
    },
    {
        author: "Theregister",
        date: "12 apr 2019",
        timetoread: "15 mins read",
        content: "US capital's surveillance cam network allegedly hijacked by romanian ransomware suspects"
    },
    {
        author: "Theregister",
        date: "12 apr 2019",
        timetoread: "15 mins read",
        content: "US capital's surveillance cam network allegedly hijacked by romanian ransomware suspects"
    },
    {
        author: "Privacy International",
        date: "12 apr 2019",
        timetoread: "15 mins read",
        content: "US capital's surveillance cam network allegedly hijacked by romanian ransomware suspects"
    },
    {
        author: "The Verge",
        date: "12 apr 2019",
        timetoread: "15 mins read",
        content: "US capital's surveillance cam network allegedly hijacked by romanian ransomware suspects"
    },
    {
        author: "The Hacker News",
        date: "12 apr 2019",
        timetoread: "15 mins read",
        content: "US capital's surveillance cam network allegedly hijacked by romanian ransomware suspects"
    },
    {
        author: "Big Brother Watch",
        date: "12 apr 2019",
        timetoread: "15 mins read",
        content: "US capital's surveillance cam network allegedly hijacked by romanian ransomware suspects"
    },
    {
        author: "Privacy International",
        date: "12 apr 2019",
        timetoread: "15 mins read",
        content: "US capital's surveillance cam network allegedly hijacked by romanian ransomware suspects"
    }
]

class HomeNews extends Component {
    render() {
        return (
            <div className={`${Style.container} container`}>
                <InViewMonitor classNameInView="animated-in">
                    <HeadingAnimation className={Style.title} delay={0} duration={0.7} color="#ffffff">
                        <h3>Latest News</h3>
                    </HeadingAnimation>
                    <div className={Style.newsWrapper}>
                        {
                            newsSource.map((news, i) => {
                                return(
                                    <NewsItem 
                                        author = {news.author} 
                                        date = {news.date} 
                                        timetoread = {news.timetoread}
                                        delay = { 0.6 + (i * 0.3) }
                                    >
                                        {news.content}
                                    </NewsItem>
                                )
                            })
                        }
                    </div>
                    <div className={Style.buttonWrapper}>
                        <BodyTextAnimation duration={0.7} delay={2.7}>
                            <Button url="#" value="Explore Now" />
                        </BodyTextAnimation>
                    </div>
                </InViewMonitor>
            </div>
        );
    }
}

export default HomeNews;