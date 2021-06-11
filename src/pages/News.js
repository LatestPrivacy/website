import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import moment from 'moment';

import InViewMonitor from 'react-inview-monitor';
import NewsItem from '../components/NewsItem';
import InfiniteScroll from 'react-infinite-scroll-component';
import SyncLoader from 'react-spinners/SyncLoader';
import { Parallax } from 'react-scroll-parallax';

import Style from './News.module.scss';

import eye from '../assets/videos/eye.mp4';

const articleLimit = 64;
const attemptLimit = 6;
let attempt = 0;

class News extends Component {
	date = new Date();
	dateStr = moment( this.date ).format( 'MM-YYYY' );
	searchTimer;

	state = {
		data: {},
		length: 0,
		loading: false,
		more: true,
		value: '',
		lastValue: '',
		result: [],
		found: true
	}

	adjustDates = () => {
		this.date.setMonth( this.date.getMonth() - 1 );
		this.dateStr = moment( this.date ).format( 'MM-YYYY' );

		this.setState( { loading: false } );
	}

	loadArticles = async () => {
		const { data, length, loading, more } = this.state;
		if ( loading || !more ) { return; };

		this.setState( { loading: true } );

		const response = await axios.get( `/api/articles?sort=${this.dateStr}&description=true` );

		if ( response.data.length > 0 ) {
			this.setState( {
				data: {
					...data,
					[ this.dateStr ]: response.data
				},
				length: length + response.data.length
			} );

			this.adjustDates();

			attempt = 0;
		} else {
			if ( attempt >= attemptLimit ) {
				this.setState( { more: false } );
			} else {
				attempt = attempt + 1;

				this.adjustDates();
				this.loadArticles();
			};
		};
	}

	throttleSearching( func, delay ) {
		if ( this.searchTimer !== undefined ) {
			clearTimeout( this.searchTimer );
		};

		this.searchTimer = setTimeout( () => {
			func();

			this.searchTimer = undefined;
		}, delay );
	}

	handleTextChange = ( event ) => {
		this.setState( { value: event.target.value } );

		this.throttleSearching( this.handleSubmit, 1000 );
	}

	handleSubmit = async ( event ) => {
		if ( event ) {
			event.preventDefault();
		};

		if ( this.searchTimer !== undefined ) {
			clearTimeout( this.searchTimer );
		};

		const { value, lastValue } = this.state;

		if ( value.length < 1 ) {
			return this.setState( {
				result: [],
				lastValue: '',
				loading: false,
				found: true
			} );
		};

		if ( value === lastValue ) {
			return;
		};

		this.setState( { loading: true, lastValue: value } );

		const response = await axios.get( `/api/articles?search=${value}&description=true&limit=100` );

		if ( response.data.length > 0 ) {
			this.setState( {
				result: response.data,
				found: true
			} );
		} else {
			this.setState( {
				result: [],
				found: false
			} );
		};

		this.setState( { loading: false } );
	}

	async componentDidMount() {
		await this.loadArticles();
	}

	renderArticle( article ) {
		const description = article.description.split( ' ' ).splice( 0, 16 ).join( ' ' ).replace( /[^a-zA-Z0-9]$/, '' );

		return (
			<NewsItem
				author={article.publisher}
				date={article.published_on}
				/*timetoread={article.read_time}*/  /*NewsItem.js: Line 35*/ /*NewsDetail.js: Line 72*/
				slug={article.slug}
				/*delay={ 0.6 + (i * 0.3) }*/
			>
				<Fragment>
					{article.title}
					<p>
						{description}...
					</p>
				</Fragment>
			</NewsItem>
		);
	}

	renderLoading() {
		return (
			<div className={Style.placeholder}>
				<SyncLoader
					size={10}
					color={'#656565'}
					loading={this.state.loading}
				/>
			</div>
		);
	}

	render() {
		const { data, length, loading, more, value, result, found } = this.state;

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
						<h2>Explore</h2>
						<div className={Style.search}>
							{
							/*
							<div className={Style.filter}>
								<span>Latest</span>
							</div>
							*/
							}
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
						{((value.length > 0 && loading) || result.length > 0 || !found)
						?	<>
								{(!loading)
								?	<div className={Style.newsWrapper}>
										{
											result.map((article, i) => (
												<Fragment key={i}>
													{
														this.renderArticle(article)
													}
												</Fragment>
											))
										}
									</div>
								:	this.renderLoading()
								}
								{(!found && !loading) &&
									<div className={Style.placeholder}>
										<b>Oops... it seems we couldn't find what you were looking for, try searching for something else.</b>
									</div>
								}
							</>
						:	<InfiniteScroll
								dataLength={length}
								next={this.loadArticles}
								hasMore={more}
								scrollThreshold={(length > articleLimit) ? 0.6 : 0.4}
								loader={this.renderLoading()}
								endMessage={
									<div className={Style.placeholder}>
										<b>Yay! You've seen everything. Come back later for more articles.</b>
									</div>
								}
							>
								<div className={Style.newsWrapper}>
									{
										Object.entries(data).map(([key, item], index) => (
											<Fragment key={index}>
												{(index > 0)
												?	<div className={Style.date}>
														<h2><span>{key}</span></h2>
													</div>
												:	<div className={Style.block}>
														<h3>Welcome</h3>
													</div>
												}
												<>
													{
														item.map((article, i) => (
															<Fragment key={i}>
																{
																	this.renderArticle(article)
																}
																{!((i+1) % (articleLimit*6)) &&
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
															</Fragment>
														))
													}
												</>
											</Fragment>
										))
									}
								</div>
							</InfiniteScroll>
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
