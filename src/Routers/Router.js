import React from 'react';
import { Routes, Route } from "react-router-dom";
import Trending from "../Components/js/Trending";
import AnimeEps from '../Components/pages/AnimeEps';
import App from '../App'

function Router() {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/pages/:animeID" element={<AnimeEps />} />
        </Routes>
    )
}

export default Router;