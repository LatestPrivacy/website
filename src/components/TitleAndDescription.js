import React, { Component } from 'react'
import { Watch } from 'scrollmonitor-react'

import Style from './TitleAndDescription.module.scss'

class TitleAndDescription extends Component {
    render() {
        return (
            <div className={this.props.className}>
                <div className={Style.title} duration={0.3} color="#ffffff" delay={0.5}>
                    <h3>{this.props.title}</h3>
                </div>
                <p>{this.props.desc}</p>
            </div>
        )
    }
}

export default Watch(TitleAndDescription);