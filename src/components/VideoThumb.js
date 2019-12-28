import React, { Component } from 'react'

import Style from './VideoThumb.module.scss'

class VideoThumb extends Component {
    render() {
        return (
            <div className="videoContainer">
                <div className={Style.videoTag}>{this.props.tag}</div>
                <div className={Style.videoImg}>
                    <img src={this.props.image} alt={this.props.title} />
                </div>
                <h3 className={Style.videoTitle}>{this.props.title}</h3>
                <p className={Style.videoDate}>{this.props.date}</p>
            </div>
        )
    }
}

export default VideoThumb