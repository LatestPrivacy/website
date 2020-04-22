import React, { Component } from 'react'
import {Helmet} from 'react-helmet'

class Videos extends Component {
    render() {
        return (
            <>
                <Helmet>
                    <title>Latest Privacy - Videos</title>
                    <meta name="description" content="The latest videos that we publish." />
                    <meta name="keywords" content="latest privacy, videos, publish, technology, security, privacy, surveillance, human rights, encryption, law, investigations, research, internet, united kingdom, GDPR, data protection, artificial intelligence" />
                </Helmet>
                <div className="container">
                    This is Videos
                </div>
            </>
        );
    }
}

export default Videos;