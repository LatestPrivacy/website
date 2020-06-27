import React, { Component } from 'react'
import ReactTooltip from 'react-tooltip';

import FooterStyle from './Footer.module.scss'

class Footer extends Component {
    render() {
        return (
            <div className={ `${FooterStyle.container} container` }>
                <ul className={FooterStyle.top}>
                    <li><a href="/terms-and-conditions">Terms & Conditions</a></li>
                    <li><a href="/sitemap.xml">Sitemap</a></li>
                    <li className={FooterStyle.onionlink}>
                        <a data-tip data-for='onion' onClick={() => {navigator.clipboard.writeText("lp5c4ebkb34ogij3vqxuars6iqnfvierojhmnzcodnzpwc4pjo6wb4ad.onion")}}>Onion Site</a>
                        <ReactTooltip id='onion' className={FooterStyle.oniontooltip} effect='solid'>
                            <span>Click to copy Tor v3 <strong>.onion domain</strong> to your clipboard</span>
                        </ReactTooltip>
                    </li>
                </ul>
                    
                <div className={FooterStyle.right}>All Rights Reserved. All trademarks registered trademarks are the property of their respective owners</div>
                <div className={FooterStyle.powered}>Powered by volunteers & donations</div>
            </div>
        );
    }
}

export default Footer;