import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios';

import HeadingAnimation from '../components/HeadingAnimation';
import InViewMonitor from 'react-inview-monitor';
import NewsItem from '../components/NewsItem';

import { Helmet } from 'react-helmet';
import InfiniteScroll from 'react-infinite-scroll-component';
import SyncLoader from 'react-spinners/SyncLoader';

import Style from './News.module.scss';

const limit = 12;

const News = () => {
	const [ data, setData ] = useState( [] );
	const [ offset, setOffset ] = useState( 0 );
	const [ loading, setLoading ] = useState( false );
	const [ more, setMore ] = useState( true );

	const loadArticles = useCallback( async () => {
		if ( loading || !more ) { return; };

		setLoading( true );

		let response = await axios.get( `/api/articles?limit=${limit}&offset=${offset}` );
		
		if ( response.data.length < limit ) {
			setMore( false );
		};

		if ( offset < limit ) {
			const desc = await axios.get( `/api/articles/${response.data[ 0 ].slug}` );
			response.data[ 0 ].description = desc.data.description;
		};

		setOffset( offset => ( offset + limit ) );
		setData( data => data.concat( response.data ) );
		setLoading( false );
	}, [ loading ] );

	useEffect( () => {
		loadArticles();
	}, [] );

	return (
		<>

			<Helmet>
				<title>Latest Privacy - News</title>
				<meta name="description" content="The latest articles that we publish." />
				<meta name="keywords" content="latest privacy, articles, publish, technology, security, privacy, surveillance, human rights, encryption, law, investigations, research, internet, united kingdom, GDPR, data protection, artificial intelligence" />
			</Helmet>

			<div className={`${Style.container} container`}>
				<InViewMonitor classNameInView="animated-in">
					<InfiniteScroll
						dataLength={data.length}
						next={loadArticles}
						hasMore={more}
						loader={
							<div class={Style.advert}>
								<SyncLoader
									size={8}
									color={'#656565'}
									loading={loading}
								/>
							</div>
						}
						endMessage={
							<div class={Style.advert}>
								<b>Yay! You have seen it all, come back later for more articles.</b>
							</div>
						}
					>
						<div className={Style.newsWrapper}>
							{
								data.map((item, index) => (
									<>

										<NewsItem
											author={item.publisher}
											date={item.published_on}
											/*timetoread={news.read_time}*/  /*NewsItem.js: Line 35*/ /*NewsDetail.js: Line 72*/
											slug={item.slug}
											/*delay={ 0.6 + (index * 0.3) }*/
											bigArticle={item.description && true}
										>
											{item.description ? (
												<>

													<h2>
														{item.title}
													</h2>
													<p>
														{item.description}
													</p>
												
												</>
											) : item.title }
										</NewsItem>

										{!((index+1) % (limit*4)) &&

											<div class={Style.advert}>
												This is a banner, should be across all 4 sections.
												<br />
												Also shown every 48 articles.
											</div>

										}

									</>
								))
							}
						</div>
					</InfiniteScroll>
				</InViewMonitor>
			</div>

		</>
	);
}

export default News;
