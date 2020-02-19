import React, {useState, useEffect} from 'react'
import Button from '../components/Button'
import Style from './NewsDetail.module.scss'

const useFetch = url => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)

    async function fetchData() {
        const response = await fetch(url)
        const data = await response.json()
        const [item] = data.results
        setData(item)
        setLoading(false)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return { data, loading };
}

const NewsDetail = ({ match, location }) => {
    const { params: { slug } } = match;

    const { data, loading } = useFetch("https://private-4d9755-peepingtom.apiary-mock.com/api/v1/articles/article");

    console.log(data) // still got error
    return (
        <div className={`container ${Style.container}`}>
            <div className={Style.article}>
                <div className={Style.publisher}>Publisher <span>The Hacker News</span></div>
                <h1>Hostinger Suffers Data Breach – Resets Password For 14 Million Users</h1>
                <div className={Style.meta}>
                    <div className={Style.metaDate}>
                        <span>26 Aug 2019</span> - <span>10 min read</span>
                    </div>
                    <div className={Style.metaAuthor}>
                        Author <span>Swati Khandelwal</span>
                    </div>
                </div>
                <div className={Style.articleContent}>
                    <p><pre>This is News Detail page {slug}</pre></p>
                    <p>Marcus Hutchins, best known for his role in stopping the 2017 Wanna -Cry ransomwareattack, has pleaded guilty to two charges related to computer hacking conspiracy. Theother eight charges will be dismissed as part of a plea deal first reported by ZDNet.</p>

                    <p>“I regret these actions and accept full responsibility for my mistakes,” Hutchins said ina statement on his website. “Having grown up, I’ve since been using the same skillsthat I misused several years ago for constructive purposes. I will continue to devotemy time to keeping people safe from malware attacks.</p>
                
                    <p>”Hutchins drew universal praise from security professionals when he discovered the“kill switch” to the WannaCry ransomware in 2017, abruptly halting an attack that hadlocked down more than 75,000 computers across more than 150 countries. He waswidely hailed as a hero for his role in containing the attack, which he had done entirely</p>
                </div>
                <div style={{
                        display: 'flex', 
                        justifyContent: 'center', 
                        marginTop: '-3rem',
                        marginBottom: '8rem',
                        position: 'relative',
                        zIndex: '9'
                    }}>
                    <Button value="Read full article"/>
                </div>
            </div>
        </div>
    )
}

export default NewsDetail;