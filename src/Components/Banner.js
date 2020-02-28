import React from 'react'
import BannerImage from '../Images/banner.png'
import HeadingImage from '../Images/heading.png'
const Banner= () => {
    return (
        <div className="banner-div">
            <img src={BannerImage} alt="bannerimage"/>
            <img src={HeadingImage} alt="headingimage"/>
        </div>
    )
}
export default Banner;