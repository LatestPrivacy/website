import React, { Component } from 'react'
import Slider from "react-slick"
import Section from '../components/Section'
import VideoThumb from '../components/VideoThumb'

import Style from './HomeVideo.module.scss'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class HomeMission extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            className: "center",
            centerMode: true,
            responsive: [
                {
                  breakpoint: 666,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    centerMode: false
                  }
                },
                {
                    breakpoint: 1023,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 1,
                      infinite: true,
                      dots: true,
                      centerMode: false
                    }
                }
            ]
        };
        return (
            <div className={Style.wrapper} id="videos">
                <div className={`${Style.videoContainer} container`}>
                    <div className={Style.videoLeft}>
                        <Section
                            title = "Education"
                            subtitle1 = "Archive of"
                            subtitle2 = "infomative videos"
                            desc = "Curated videos that will show you about the various facets of privacy and how it can affect you."
                            button = "Coming Soon"
                        />
                    </div>
                </div>
                <div className={`${Style.sliderContainer} container`}>
                    <Slider {...settings}>
                        <VideoThumb 
                            tag = "Education"
                            image = "https://source.unsplash.com/300x200/?security"
                            title = "Safe and Sorry - Terrorism & Mass Surveillance"
                            date = "Apr 14, 2016"
                        />
                        <VideoThumb 
                            tag = "TEDx"
                            image = "https://source.unsplash.com/300x200/?security,lock"
                            title = "Glenn Greenwald: Why privacy matters"
                            date = "Apr 14, 2016"
                        />
                        <VideoThumb 
                            tag = "Nothing To Hide documentary"
                            image = "https://source.unsplash.com/300x200/?security,people"
                            title = "Nothing to hide documentary"
                            date = "Apr 14, 2016"
                        />
                        <VideoThumb 
                            tag = "Education"
                            image = "https://source.unsplash.com/300x200/?security"
                            title = "Safe and Sorry - Terrorism & Mass Surveillance"
                            date = "Apr 14, 2016"
                        />
                        <VideoThumb 
                            tag = "TEDx"
                            image = "https://source.unsplash.com/300x200/?security,lock"
                            title = "Glenn Greenwald: Why privacy matters"
                            date = "Apr 14, 2016"
                        />
                        <VideoThumb 
                            tag = "Nothing To Hide documentary"
                            image = "https://source.unsplash.com/300x200/?security,people"
                            title = "Nothing to hide documentary"
                            date = "Apr 14, 2016"
                        />
                    </Slider>
                </div>
            </div>
            
        )
    }
}

export default HomeMission;