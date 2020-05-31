import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Moment from 'react-moment'

import Link from '../components/Link'
import Style from './NewsDetail.module.scss'

const NewsDetail = ({ match, location }) => {
    const { params: { slug } } = match;

    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        axios.get(`/articles/${slug}`)
            .then(res => {
                setData(res.data)
                setLoading(false)
                //setTimeout(() => setLoading(false), 3000)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    

    return (
        <div className={`container ${Style.container}`}>
                
            <div style={{ 
                'transitionProperty': 'opacity',
                'transitionDuration': '300ms'
            }}
                 className={loading ? Style.loading : Style.loadingComplete}>Loading...</div>

            <div className={Style.article}>
                <div className={Style.publisher}>Publisher <span>{data.publisher}</span></div>
                <h1>{data.title}</h1>
                <div className={Style.meta}>
                    <div className={Style.metaDate}>
                        <span>
                            <Moment format="DD MMM YYYY">
                                { new Date(data.published_on).toDateString() } 
                            </Moment>
                        </span>  
                        
                    </div>
                    <div className={Style.metaAuthor}>
                        Author <span>{data.author}</span>
                    </div>
                </div>
                <div className={Style.articleContent}>
                    {data.description}
                </div>
                <div style={{
                        display: 'flex', 
                        justifyContent: 'center', 
                        marginTop: '0',
                        marginBottom: '8rem',
                        position: 'relative',
                        zIndex: '9'
                    }}>
                    <Link url={data.link} value="Read full article" target="_blank"/>
                </div>
            </div>
        </div>
    )
}

export default NewsDetail;

/*Add this to line 46 when Myles has implemented the reading predictions */
 /*
   &nbsp; &bull; &nbsp; 
    <span>
        {data.read_time} {data.read_time > 1 ? 'mins read' : 'min read'}
    </span>
*/