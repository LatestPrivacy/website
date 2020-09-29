import React, { Component } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';

import InViewMonitor from 'react-inview-monitor';
import NewsItem from '../components/NewsItem';
import InfiniteScroll from 'react-infinite-scroll-component';
import SyncLoader from 'react-spinners/SyncLoader';

import Style from './News.module.scss';

import moment from 'moment';

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

				<div>
					<form onSubmit={this.handleSubmit}>
						<input
							className="react-search-field-input"
							style={{}}
							onChange={this.handleTextChange}
							placeholder={'search'}
							type="text"
							value={value}
						/>
					</form>
				</div>

				<div className={`${Style.container} container`}>
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
																<>
																	<h2>
																		{article.title}
																	</h2>
																	<p>
																		{article.description}
																	</p>
																</>
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
																<div className={Style.advert}>
																	<h3>{key}</h3>
																</div>
															) : (
																<div>
																	<h3>First Block Here</h3>
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
																			<>
																				<h2>
																					{article.title}
																				</h2>
																				<p>
																					{article.description}
																				</p>
																			</>
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
			</>
		);
	}
}

export default News;
