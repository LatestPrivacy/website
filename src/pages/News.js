import React, { Component } from 'react'
import {Helmet} from 'react-helmet'

class News extends Component {
    render() {
        return (
            <>
                <Helmet>
                    <title>Latest Privacy - News</title>
                    <meta name="description" content="The latest articles that we publish." />
                    <meta name="keywords" content="latest privacy, articles, publish, technology, security, privacy, surveillance, human rights, encryption, law, investigations, research, internet, united kingdom, GDPR, data protection, artificial intelligence" />
                </Helmet>
                <div className="container">
                    This is News
                </div>
            </>
        );
    }
}

export default News;