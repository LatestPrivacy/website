import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios';
import Moment from 'react-moment';

import { Helmet } from 'react-helmet';
import InfiniteScroll from 'react-infinite-scroll-component';

const limit = 20;
var offset = 0;

const News = () => {
	const [ data, setData ] = useState( [] );
	const [ loading, setLoading ] = useState( false );

	const loadArticles = useCallback( async () => {
		if ( loading ) { return; };

		setLoading( true );

		let response = await axios.get( `/api/articles?limit=${limit}&offset=${offset}` );

		if ( offset < limit ) {
			const desc = await axios.get( `/api/articles/${response.data[ 0 ].slug}` );
			response.data[ 0 ].description = desc.data.description;
		};

		offset = offset + limit;

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

			<div className="container">
				<InfiniteScroll
					dataLength={data.length}
					next={loadArticles}
					hasMore={true}
					loader={
						<h4>Loading...</h4>
					}
				>
					{data.map((item, index) => (
						<div style={{
							border: '1px solid green',
							margin: 6,
							padding: 8
						}} key={index}>
							{item.title}
							{item.description &&
								<div style={{
									color: '#838',
									marginTop: 8
								}}>
									{item.description}
								</div>
							}
						</div>
					))}
				</InfiniteScroll>
			</div>

		</>
	);
}

export default News;
