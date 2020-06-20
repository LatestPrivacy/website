import React, { Component } from 'react'

import FooterStyle from './Footer.module.scss'

class Footer extends Component {
    render() {
        return (
            <div className={ `${FooterStyle.container} container` }>
                <ul className={FooterStyle.top}>
                    <li><a href="/terms-and-conditions">Terms & Conditions</a></li>
                    <li><a href="/sitemap.xml">Sitemap</a></li>
                </ul>
                <div className={FooterStyle.right}>All Rights Reserved. All trademarks registered trademarks are the property of their respective owners</div>
                <div className={FooterStyle.powered}>Powered by volunteers & donations</div>
            </div>
        );
    }
}

export default Footer;