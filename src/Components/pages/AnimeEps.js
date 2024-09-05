import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import data from '../../Data/anime-episodes-data.json';
import "../css/Trending.css";
import "../css/AnimeEps.css";

function AnimeEps() {

    const swalPopup = (navigate) => {
        Swal.fire({
            title: "Coming Soon...",
            text: "Stay tuned!",
            icon: "info",
            showCancelButton: true, // Show the cancel button
            cancelButtonText: 'Back', // Text for the cancel button
            showConfirmButton: false, // Hide the confirm button
            customClass: {
                cancelButton: 'btn btn-secondary' // Add a class for styling the cancel button
            }
        }).then((result) => {
            if (result.dismiss === Swal.DismissReason.cancel) {
                // Navigate to the root URL ("/") when the Back button is clicked
                navigate('/');
            }
        });
    }

    const navigate = useNavigate();

    const { animeID } = useParams();

    const animeData = data.find(item => item.animeID === animeID);

    if (!animeData) {
        swalPopup(navigate);
        return <p>Anime not found</p>; 
    }

    return (
        <div className="anime-episodes-container mt-5">
            <div className="anime-episodes-content">
                <Link to={`/`} className="anime-header-link">Trending <span className="yellow-text">this week</span></Link>
                <div className="anime-episodes-item" key={animeData.animeID}>
                    <div className='anime-episodes-left-content'>
                        <div className="anime-image">
                            <img
                                src={`/images/trending/anime-${animeData.animeThumbnail}.png`}
                                className="anime-thumbnail episodes-list"
                                alt={animeData.animeTitle}
                            />
                            <div className="anime-episodes-details">
                                <h3 className="anime-title episodes-list">{animeData.animeTitle}</h3>
                                <div className="anime-episodes-categ-and-ratings">
                                    <p className="anime-category-text">Category: {animeData.animeCategory}</p>
                                    <div className="ratings">
                                        <img src={"/images/banner/star-icon.png"} className="star-icon" alt="star-icon" />
                                        <p className="ratings-text">{animeData.ratings}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className='anime-description'>{animeData.animeDescription}</p>
                    </div>
                    <div className="anime-episodes-list-container">
                        <div className="episodes-list-header">
                            <p className='episode-text'>Episodes</p>
                            <p className='episode-text me-5 mobile'>Season 1</p>
                        </div>
                        {Object.entries(animeData.episodeNo).map(([episodeNo, episode]) => (
                            <div className="anime-episodes-list-content" key={episodeNo}>
                                <div
                                    className="anime-image-episodes"
                                    style={{
                                        backgroundImage: `url(/images/anime-episodes/${animeData.animeID}/episode-${episodeNo}.png)`, // Use episodeNo here
                                        height: '236px',
                                        width: '409px',
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        transition: 'background-image 0.3s ease-in-out'
                                    }}
                                    onMouseEnter={e => e.currentTarget.style.backgroundImage = `url(/images/anime-episodes/${animeData.animeID}/episode-${episodeNo}-hover.png)`} // Use episodeNo here
                                    onMouseLeave={e => e.currentTarget.style.backgroundImage = `url(/images/anime-episodes/${animeData.animeID}/episode-${episodeNo}.png)`} // Use episodeNo here
                                ></div>
                                <div className='anime-episodes-texts'>
                                    <h4 className="anime-episodes-episode-title">Episode {episodeNo}</h4>
                                    <p className="anime-episodes-episode-desc">{episode.episodeDesc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AnimeEps;
