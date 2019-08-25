import React, { Component } from 'react'

import FooterStyle from './Footer.module.css'

class Footer extends Component {
    render() {
        return (
            <div className={ `${FooterStyle.container} container` }>
                <ul className={FooterStyle.top}>
                    <li><a href="http://#">Term & Conditions</a></li>
                    <li><a href="http://#">Sitemap</a></li>
                </ul>
                <div className={FooterStyle.right}>All Rights Reserved. All trademarks and registered tradenarks are property of their respective owners.</div>
                <div className={FooterStyle.powered}>Powerd by Volunteers & donations</div>
            </div>
        );
    }
}

export default Footer;