import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';

import HeadingAnimation from './HeadingAnimation';
import BodyTextAnimation from '../components/BodyTextAnimation';
import NewsItem from '../components/NewsItem';
import Button from '../components/Button';
import InViewMonitor from 'react-inview-monitor';
import SyncLoader from 'react-spinners/SyncLoader';

import Style from './HomeNews.module.scss';

const limit = 8;

const HomeNews = () => {
	const [ data, setData ] = useState( [] );
	const [ loading, setLoading ] = useState( true );

	useEffect( () => {
		const fetchArticles = async () => {
			try {
				const response = await axios.get( `/api/articles?limit=${limit}` );

				setData( data => response.data );
				setLoading( false );
			} catch( err ) {
				console.log( err );
			};
		};

		fetchArticles();
	}, [] );

	return (
		<div className={`${Style.container} container`} id="news">
			<InViewMonitor classNameInView="animated-in">
				<HeadingAnimation className={Style.title} delay={0} duration={0.7} color="#ffffff">
					<h3>Latest News</h3>
				</HeadingAnimation>
				<div className={Style.newsWrapper}>
					{loading
					?	<div style={{'gridColumn': 'span 12', 'textAlign': 'center'}}>
							<SyncLoader
								size={10}
								color={'#656565'}
								loading={loading}
							/>
						</div>
					:	data.map((item, index) => (
							<Fragment key={index}>
								<NewsItem
									author={item.publisher} 
									date={item.published_on} 
									/*timetoread={item.read_time}*/  /*NewsItem.js: Line 35*/ /*NewsDetail.js: Line 72*/
									slug={item.slug}
									delay={0.6 + (index * 0.3)}
								>
									{item.title}
								</NewsItem>
							</Fragment>
						))
					}
				</div>
				<div className={Style.buttonWrapper}>
					<BodyTextAnimation duration={0.7} delay={2.7}>
						<Button url="/news" value="Explore More" />
					</BodyTextAnimation>
				</div>
			</InViewMonitor>
		</div>
	)
}

export default HomeNews;