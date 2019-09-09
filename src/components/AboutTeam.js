import React, { Component } from 'react'

import TeamStyle from './AboutTeam.module.scss'

class AboutTeam extends Component {
    render() {
        return (
            <div className={ `${TeamStyle.container} container` }>
                <div className={TeamStyle.top}>
                    <h1 className={TeamStyle.title}>{this.props.title}</h1>
                    <p>{this.props.desc}</p>
                </div>
                <div className={TeamStyle.teamWrapper}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default AboutTeam;