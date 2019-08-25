import React, { Component } from 'react'

import JoinStyle from './AboutJoin.module.css'

class AboutJoin extends Component {
    render() {
        return (
            <div className={ `${JoinStyle.container} container` }>
                <div className={JoinStyle.top}>
                    <h1 className={JoinStyle.title}>{this.props.title}</h1>
                    <p>{this.props.desc}</p>
                </div>
                {this.props.children}
            </div>
        );
    }
}

export default AboutJoin;