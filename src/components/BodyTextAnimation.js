import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './BodyTextAnimation.scss'

class BodyTextAnimation extends Component{
    render(){
        const TextStyle = {
            animationDelay: this.props.delay + 's',
            animationDuration: this.props.duration + 's'
        }
        return(
            <div className={`BodyTextAnimationWrapper ${this.props.className}`}>
                <div className="BodyTextAnimationText" style={TextStyle}>{this.props.children}</div>
            </div>
        )
    }
}
export default BodyTextAnimation;

BodyTextAnimation.defaultProps = {
    className:'',
    delay: 0,
    duration: 1
}

BodyTextAnimation.propTypes = {
    className: PropTypes.string,
    delay: PropTypes.number,
    duration: PropTypes.string
}