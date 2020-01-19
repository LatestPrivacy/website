import React, { Component } from 'react'

import FooterStyle from './Footer.module.scss'

class Footer extends Component {
    render() {
        return (
            <div className={ `${FooterStyle.container} container` }>
                <ul className={FooterStyle.top}>
                    <li><a href="http://#">Terms & Conditions</a></li>
                    <li><a href="http://#">Sitemap</a></li>
                </ul>
                <div className={FooterStyle.right}>All Rights Reserved. All trademarks registered trademarks are the property of their respective owners</div>
                <div className={FooterStyle.powered}>Powered by volunteers & donations</div>
            </div>
        );
    }
}

export default Footer;