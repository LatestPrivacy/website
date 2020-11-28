import React, { Component } from 'react';

import NoticeStyle from './NoticeBanner.module.scss';

import parliamentImg from '../assets/images/parliament.png'

class HomeMission extends Component {
    render() {
        return (
          <a className={NoticeStyle.notice} href="https://petition.parliament.uk/petitions/554027" >
              <div>
                <img src={parliamentImg}></img>
                <p> 
                  Stop the British government from injecting backdoors into end-to-end encryption. 
                  <span>Sign this petition!</span> 
                </p>
              </div>
          </a>
        )
    }
}

export default HomeMission;