import "../css/Trending.css";
import "../css/Media-Query.css";
import React, { } from "react";
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from '../../Data/trending-data.json'

function Trending() {

    const uniqueData = Array.from(
        new Map(data.map(item => [item.animeID, item])).values()
    );

    const settings = {
        className: "slider variable-width",
        arrows: false,
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true
    };


    return (
        <>
            <div className="trending-container mt-5">
                <p className="trending-header">Trending <span className="yellow-text">this week</span></p>
                <Slider {...settings}>
                    {uniqueData.map(item => (
                        <div className="anime-container" key={item.animeID}>
                            <Link to={`/pages/${item.animeID}`} className="trending-image-link">
                                <div className="trending-image">
                                    <img
                                        src={`/images/trending/anime-${item.animeThumbnail}.png`}
                                        className="anime-thumbnail trending"
                                        alt={item.animeTitle}
                                    />
                                    <div className="trending-content">
                                        <div className="trending-texts">
                                            <h1 className="anime-title">{item.animeTitle}</h1>
                                            <div className="category-and-ratings">
                                                <p className="anime-category-text">Category: {item.animeCategory}</p>
                                                <div className="ratings">
                                                    <img src={"/images/banner/star-icon.png"} className="star-icon" alt="star-icon" />
                                                    <p className="ratings-text">{item.ratings}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
}

export default Trending;