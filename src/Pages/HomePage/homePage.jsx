import { useEffect } from 'react';
import Header from "../../components/Header/header";
import Featured from "../../components/Featured/featured";
import MovieCarousel from "../../components/MovieCarousel/MovieCarousel";
import Footer from "../../components/Footer/footer";

function HomePage() {
  useEffect(() => {
    document.body.className = "bg-black font-sans"; 
  }, []);

  return (
    <div className="flex flex-col min-h-screen items-center">
      <Header />
      <Featured />
      <div className="w-full max-w-[1200px] mx-auto px-6 py-8 text-white">
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
