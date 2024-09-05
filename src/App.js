import './App.css';
import "@fontsource/outfit";
import Navbar from './Components/js/Navbar';
import Banner from './Components/js/Banner';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Throwback from './Components/js/Throwback';
import Trending from './Components/js/Trending';
import AnimeEps from './Components/pages/AnimeEps';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <AppContent />
    </div>
  );
}

function AppContent() {
  const location = useLocation();

  // Determine if the current route requires hiding Trending and Throwback
  const shouldHideTrendingAndThrowback = location.pathname.startsWith('/pages/');

  return (
    <div className='App-middle-section'>
      {!shouldHideTrendingAndThrowback && <Trending />}
      <Routes>
        <Route path="/trending" element={<Trending />} />
        <Route path="/pages/:animeID" element={<AnimeEps />} />
        {/* Add other routes as needed */}
      </Routes>
      {!shouldHideTrendingAndThrowback && <Throwback />}
    </div>
  );
}

export default App;
