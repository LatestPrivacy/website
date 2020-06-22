import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './HeadingAnimation.scss'

class HeadingAnimation extends Component{
    render(){
        const TextStyle = {
            animationDelay: (this.props.delay + 0.35) + 's'
        }
        const BlockStyle = {
            animationDuration: this.props.duration + 's',
            animationDelay: this.props.delay + 's',
            backgroundColor: this.props.color
        }
        return(
            <div className={`HeadingAnimationWrapper ${this.props.className}`}>
                <div className="HeadingAnimationText" style={TextStyle}>{this.props.children}</div>
                <div className="HeadingAnimationBlock" style={BlockStyle}></div>
            </div>
        )
    }
}
export default HeadingAnimation;

HeadingAnimation.defaultProps = {
    delay: 0,
    duration: 1,
    color: '#FFFFFF'
}

HeadingAnimation.propTypes = {
    delay: PropTypes.number,
    duration: PropTypes.number,
    color: PropTypes.string
}