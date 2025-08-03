import { useEffect } from 'react';
import Header from "../../components/Header/header";
import Featured from "../../components/Featured/featured";
import MovieCarousel from "../../components/MovieCarousel/MovieCarousel";
import Footer from "../../components/Footer/footer";
import './homePage.css';

function HomePage() {
  useEffect(() => {
  document.body.className = 'home-body';
}, []);


  return (
    <div className="home-page">
      <Header />
        <Featured />
      <div className='movie-carousel-section'>
        <MovieCarousel category="continueWatching" label="Melanjutkan Tonton Film" />
        <MovieCarousel category="topRating" label="Top Rating Film dan Series Hari ini" />
        <MovieCarousel category="trending" label="Film Trending" />
        <MovieCarousel category="newRelease" label="Rilis Terbaru" />
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
