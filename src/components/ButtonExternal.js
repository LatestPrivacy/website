import React, { Component } from 'react'

import Style from './Button.module.scss'
import Arrow from '../assets/images/arrow-right.svg'
import Love from '../assets/images/ico-love.svg'

class ButtonExternal extends Component {
    render() {
        return (
            <>
				<a href={this.props.url} target="_blank" rel="noopener noreferrer" className={this.props.type === "line" ? Style.buttonLine : Style.button}>
					<span>{this.props.value}</span>
					{this.props.type === "line"
						? <img src={Love} alt="Love" className="love" />
						: <img src={Arrow} alt="arrow" className="arrow" />
					}
				</a>
			</>
        );
    }
}

export default ButtonExternal;

ButtonExternal.defaultProps = {
    url: "#"
}