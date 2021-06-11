import React, { Component } from 'react'
import ReactTooltip from 'react-tooltip';

import Style from './Footer.module.scss'

class Footer extends Component {
    render() {
        return (
            <div className={`${Style.container} container`}>
                <ul className={Style.top}>
                    <li>
                        <a href="/terms-and-conditions">Terms & Conditions</a>
                    </li>
                    <li>
                        <a href="/sitemap.xml">Sitemap</a>
                    </li>
                    <li className={Style.onionlink}>
                        <button className={Style.link} data-tip data-for='onion' onClick={() => {navigator.clipboard.writeText("lp5c4ebkb34ogij3vqxuars6iqnfvierojhmnzcodnzpwc4pjo6wb4ad.onion")}}>
                            Onion Site
                        </button>
                        <ReactTooltip id='onion' className={Style.oniontooltip} effect='solid'>
                            <span>
                                Click to copy Tor v3 <strong>.onion domain</strong> to your clipboard.
                            </span>
                        </ReactTooltip>
                    </li>
                </ul>
                <div className={Style.right}>
                    All Rights Reserved. All trademarks registered trademarks are the property of their respective owners.
                </div>
                <div className={Style.powered}>
                    Powered by volunteers & donations.
                </div>
            </div>
        );
    }
}

export default Footer;