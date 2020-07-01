import React, { Component } from 'react'
import {Helmet} from 'react-helmet'
import InfiniteScroll from "react-infinite-scroll-component";

const style = {
    height: 30,
    border: "1px solid green",
    margin: 6,
    padding: 8
  };

class News extends Component {
    state = {
        items: Array.from({ length: 20 })
      };

    fetchMoreData = () => {
        // a fake async api call like which sends
        // 20 more records in 1.5 secs
        setTimeout(() => {
          this.setState({
            items: this.state.items.concat(Array.from({ length: 20 }))
          });
        }, 1500);
      };
      
    render() {
        return (
            <>
                <Helmet>
                    <title>Latest Privacy - News</title>
                    <meta name="description" content="The latest articles that we publish." />
                    <meta name="keywords" content="latest privacy, articles, publish, technology, security, privacy, surveillance, human rights, encryption, law, investigations, research, internet, united kingdom, GDPR, data protection, artificial intelligence" />
                </Helmet>
                <div className="container">
                <InfiniteScroll
                dataLength={this.state.items.length}
                next={this.fetchMoreData}
                hasMore={true}
                loader={<h4>Loading...</h4>}
                >
                {this.state.items.map((i, index) => (
                    <div style={style} key={index}>
                    div - #{index}
                    </div>
                ))}
                </InfiniteScroll>
                </div>
            </>
        );
    }
}

export default News;