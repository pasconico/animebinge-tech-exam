import "../css/Banner.css";
import "../css/Media-Query.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from '../../Data/banner-data.json';


function Banner() {
    const uniqueData = Array.from(
        new Map(data.map(item => [item.id, item])).values()
    );

    const [activeCategory, setActiveCategory] = useState('overview');

    const settings = {
        arrows: false,
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <>
            <Slider {...settings}>
                {uniqueData.map(item => (
                    <div className="banner-container" key={item.id}>
                        <div className="banner-image">
                            <img src={"/images/banner/banner.png"} className="banner" alt={item.title} />
                        </div>
                        <div className="banner-content">
                            <div className="banner-texts">
                                <h1 className="banner-title">{item.title}</h1>
                                <div className="ratings-and-category">
                                    <div className="ratings">
                                        <img src={"/images/banner/star-icon.png"} className="star-icon" alt="star-icon" />
                                        <p className="ratings-and-category-text">{item.ratings}</p>
                                    </div>
                                    <p className="ratings-and-category-text">Category: {item.category}</p>
                                </div>
                                <p className="banner-description">{item.description}</p>
                            </div>
                            <div className="banner-buttons">
                                <a href="#watch" className="watch-now-btn">
                                    <img src="/images/banner/play-button-icon.png" className="watch-now-icon" alt="watch-now-icon" />
                                    Watch Now!
                                </a>
                                <a href="#favorite" className="favorite-btn">
                                    <img src="/images/banner/heart-icon.png" className="heart-icon" alt="heart-icon" />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>

            <div className="categories">
                <Link
                    to="/overview"
                    className={`categories-text ${activeCategory === 'overview' ? 'active' : ''}`}
                    onClick={() => setActiveCategory('overview')}
                >
                    Overview
                </Link>
                <Link
                    to="/episodes"
                    className={`categories-text ${activeCategory === 'episodes' ? 'active' : ''}`}
                    onClick={() => setActiveCategory('episodes')}
                >
                    Episodes
                </Link>
                <Link
                    to="/details"
                    className={`categories-text ${activeCategory === 'details' ? 'active' : ''}`}
                    onClick={() => setActiveCategory('details')}
                >
                    Details
                </Link>
            </div>
        </>
    );
}

export default Banner;