import React, { Component } from 'react'
import HeadingAnimation from './HeadingAnimation';
import InViewMonitor from 'react-inview-monitor';
import BodyTextAnimation from '../components/BodyTextAnimation'
import NewsItem from '../components/NewsItem'
import Button from '../components/Button'

import Style from './HomeNews.module.scss'

class HomeNews extends Component {

    state = {
        loading: true,
        newsData: null
    }

    async componentDidMount(){
        const url = "https://private-c72d5a-peepingtom.apiary-mock.com/api/v1/articles"
        const response = await fetch(url)
        const data = await response.json()
        //console.log(data)
        this.setState({
            loading: false,
            newsData: data
        })
    }

    render() {
        if (this.state.loading) {
            return <div>loading...</div>;
        }
      
        if (!this.state.newsData) {
            return <div>didn't get a news data</div>;
        }
        return (
            <div className={`${Style.container} container`}>
                <InViewMonitor classNameInView="animated-in">
                    <HeadingAnimation className={Style.title} delay={0} duration={0.7} color="#ffffff">
                        <h3>Latest News</h3>
                    </HeadingAnimation>
                    <div className={Style.newsWrapper}>
                        {
                            this.state.newsData.map((news, i) => {
                                return(
                                    <NewsItem 
                                        author = {news.publisher} 
                                        date = {news.published_on} 
                                        timetoread = {news.read_time}
                                        slug = {news.slug}
                                        delay = { 0.6 + (i * 0.3) }
                                    >
                                        {news.title}
                                    </NewsItem>
                                )
                            })
                        }
                    </div>
                    <div className={Style.buttonWrapper}>
                        <BodyTextAnimation duration={0.7} delay={2.7}>
                            <Button url="#" value="Coming Soon" />
                        </BodyTextAnimation>
                    </div>
                </InViewMonitor>
            </div>
        );
    }
}

export default HomeNews;