import React, { Component } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';

import InViewMonitor from 'react-inview-monitor';
import NewsItem from '../components/NewsItem';
import InfiniteScroll from 'react-infinite-scroll-component';
import SyncLoader from 'react-spinners/SyncLoader';
import { Parallax } from 'react-scroll-parallax';

import Style from './News.module.scss';

import moment from 'moment';

import eye from '../assets/eye.mp4';

const artLimit = 64;

let date = new Date();
let dateStr = moment( date ).format( 'MM-YYYY' );

class News extends Component {
	state = {
		data: {},
		length: 0,
		loading: false,
		more: true,
		value: '',
		result: []
	}

	loadArticles = async () => {
		const { data, length, loading, more } = this.state;
		if ( loading || !more ) { return; };

		this.setState( { loading: true } );

		const response = await axios.get( `/api/articles?sort=${dateStr}&description=true` );

		if ( response.data.length > 0 ) {
			this.setState( {
				data: {
					...data,
					[ dateStr ]: response.data
				},
				length: length + response.data.length
			} );

			date.setMonth( date.getMonth() - 1 );
			dateStr = moment( date ).format( 'MM-YYYY' );
		} else {
			this.setState( { more: false } );
		};

		this.setState( { loading: false } );
	}

	handleTextChange = ( event ) => {
		this.setState( { value: event.target.value } );
	}

	handleSubmit = async ( event ) => {
		event.preventDefault();

		const { data, value } = this.state;

		this.setState( { loading: true } );

		const response = await axios.get( `/api/articles?search=${value}&description=true&limit=100` );

		if ( response.data.length > 0 ) {
			this.setState( { result: response.data } );
		};

		this.setState( { loading: false } );
	}

	async componentDidMount() {

		await this.loadArticles();

	}

	render() {
		const { data, length, loading, more, value, result } = this.state;

		return (
			<>
				<Helmet>
					<title>Latest Privacy - News</title>
					<meta name="description" content="The latest articles that we publish." />
					<meta name="keywords" content="latest privacy, articles, publish, technology, security, privacy, surveillance, human rights, encryption, law, investigations, research, internet, united kingdom, GDPR, data protection, artificial intelligence" />
				</Helmet>

				

				<div className={`${Style.container} container`}>
					<video className={Style.videoBG} autoPlay muted loop>
                        <source src={eye} type="video/mp4"/>
                    </video>
					<div className={Style.newsHeader}>
						<h2>
							Explore
						</h2>
						<div className={Style.search}>
							<div className={Style.filter}>
								<span>Latest</span>
							</div>
							<div className={Style.searchbar}>
								<form onSubmit={this.handleSubmit} >
									<input
										className="react-search-field-input"
										style={{}}
										onChange={this.handleTextChange}
										placeholder={'Search'}
										type="text"
										value={value}
									/>
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
										<path d="M495 466.2L377.2 348.4c29.2-35.6 46.8-81.2 46.8-130.9C424 103.5 331.5 11 217.5 11 103.4 11 11 103.5 11 217.5S103.4 424 217.5 424c49.7 0 95.2-17.5 130.8-46.7L466.1 495c8 8 20.9 8 28.9 0 8-7.9 8-20.9 0-28.8zm-277.5-83.3C126.2 382.9 52 308.7 52 217.5S126.2 52 217.5 52C308.7 52 383 126.3 383 217.5s-74.3 165.4-165.5 165.4z"/>
									</svg>
								</form>
							</div>
						</div>
						
					</div>
					<InViewMonitor classNameInView="animated-in">
						{((value.length > 0 && loading) || result.length > 0) ?
							(
								<>
									{(!loading) ?
										(
											<div className={Style.newsWrapper}>
												{
													result.map((article, i) => (
														<>
															<NewsItem
																author={article.publisher}
																date={article.published_on}
																/*timetoread={article.read_time}*/  /*NewsItem.js: Line 35*/ /*NewsDetail.js: Line 72*/
																slug={article.slug}
																/*delay={ 0.6 + (i * 0.3) }*/
															>
																
																<a>
																	{article.title}
																</a>
																<p>
																	{article.description.substring(0, 120)}...
																</p>
																
															</NewsItem>
														</>
													))
												}
											</div>
										) : (
											<div className={Style.loading}>
												<SyncLoader
													size={8}
													color={'#656565'}
													loading={loading}
												/>
											</div>
										)
									}
								</>
							) : (
								<InfiniteScroll
									dataLength={length}
									next={this.loadArticles}
									hasMore={more}
									scrollThreshold={0.6}
									loader={
										<div className={Style.loading}>
											<SyncLoader
												size={8}
												color={'#656565'}
												loading={loading}
											/>
										</div>
									}
									endMessage={
										<div className={Style.loading}>
											<b>Yay! You have seen everything, come back later for more articles.</b>
										</div>
									}
								>
									<div className={Style.newsWrapper}>
										{
											Object.entries(data).map(([key, item], index) => {
												return (
													<>
														{(index > 0) ?
															(
																<div className={Style.date}>
																	<h2><span>{key}</span></h2>
																</div>
															) : (
																<div className={Style.block}>
																	<h3>Welcome</h3>
																</div>
															)
														}
														<>
															{
																item.map((article, i) => (
																	<>
																		<NewsItem
																			author={article.publisher}
																			date={article.published_on}
																			/*timetoread={article.read_time}*/  /*NewsItem.js: Line 35*/ /*NewsDetail.js: Line 72*/
																			slug={article.slug}
																			/*delay={ 0.6 + (i * 0.3) }*/
																		>

																			<a>
																				{article.title}
																			</a>
																			<p>
																				{article.description.substring(0, 120)}...
																			</p>
																				
																		</NewsItem>
																		{!((i+1) % (artLimit*6)) &&
																			<a href="/#donate" className={Style.advert}>
																				<h3>
																					Please support us
																				</h3>
																				<div>
																					<p>
																						By supporting, it enables us to carry on 
																						spreading awareness to a bigger audience 
																						about our right to privacy with tools 
																						that make it easier to follow the privacy 
																						world.
																					</p>
																				</div>
																			</a>
																		}
																	</>
																))
															}
														</>
													</>
												)
											})
										}
									</div>
								</InfiniteScroll>
							)
						}
					</InViewMonitor>
				</div>
				<Parallax className={Style.parallaxLeft} x={[30, -60]} tagOuter="figure">
                    <div className={Style.parallaxText}>Privacy</div>
                </Parallax>
				<Parallax className={Style.parallaxright} x={[50, -40]} tagOuter="figure">
                    <div className={Style.parallaxText}>News</div>
                </Parallax>
			</>
		);
	}
}

export default News;
