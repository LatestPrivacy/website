import React, { Component } from 'react'
import {Helmet} from 'react-helmet'

class LinkMeta extends Component {
    render() {
        return (
            <Helmet>
                <title>{this.props.title}</title>
                <meta name="description" content={this.props.description} />
                <meta name="keywords" content={this.props.keywords.replace(/-/g, ', ')} />
            </Helmet>
        );
    }
}

export default LinkMeta;

LinkMeta.defaultProps = {
    title: "Loading",
    description: "Loading",
    keywords: "Loading"
}