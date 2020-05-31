import React, { useState, useEffect } from 'react'

import axios from 'axios'

import HeadingAnimation from './HeadingAnimation';
import InViewMonitor from 'react-inview-monitor';
import BodyTextAnimation from '../components/BodyTextAnimation'
import NewsItem from '../components/NewsItem'
import Button from '../components/Button'

import Style from './HomeNews.module.scss'

const HomeNews = () => {

    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get("/articles?limit=8")
            .then(res => {
                setData(res.data)
                setLoading(false)
                //setTimeout(() => setLoading(false), 3000)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    /*
    async componentDidMount(){
        const url = "/articles?limit=4"
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        this.setState({
            loading: false,
            newsData: data
        })
    }
    */

    if (!data) {
        return <div style={{ 'textAlign': 'center'}}>didn't get a news data</div>;
    }

    return (
        <div className={`${Style.container} container`} id="news">
            <InViewMonitor classNameInView="animated-in">
                <HeadingAnimation className={Style.title} delay={0} duration={0.7} color="#ffffff">
                    <h3>Latest News</h3>
                </HeadingAnimation>

                <div className={Style.newsWrapper}>
                    {
                        loading ? <div style={{ 'gridColumn': 'span 12', 'textAlign': 'center'}}>loading...</div> :
                        data.map((news, i) => {
                            return(
                                <NewsItem 
                                    author = {news.publisher} 
                                    date = {news.published_on} 
                                    /*timetoread = {news.read_time}*/  /*NewItem.js: Line 35*/
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
    )
}

export default HomeNews;