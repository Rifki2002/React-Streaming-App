import React, { useRef } from 'react';
import './MovieCarousel.css';
import lookupImg from '../../assets/movie1.png';
import allofusImg from '../../assets/movie2.png';
import blulockImg from '../../assets/movie3.png';
import ottoImg from '../../assets/movie4.png';
import suzumeImg from '../../assets/movie5.png';
import jurasicImg from '../../assets/movie6.png';
import sonicImg from '../../assets/movie7.png';
import bigheroImg from '../../assets/movie9.png';
import tommorowlandImg from '../../assets/movie10.png';
import antmanImg from '../../assets/movie11.png';
import gotgImg from '../../assets/movie12.png';
import mermaidImg from '../../assets/movie14.png';
import dasImg from '../../assets/movie15.png';
import missingImg from '../../assets/movie16.png';
import starIcon from '../../assets/star.png';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const movieCategories = {
  continueWatching: [
    { title: "Don't Look Up", rating: 4.5, image: lookupImg },
    { title: "All Of Us Are Dead", rating: 4.5, image: allofusImg },
    { title: "Blue Lock", rating: 4.5, image: blulockImg },
    { title: "A Man Called Otto", rating: 4.5, image: ottoImg },
  ],
  topRating: [
    { title: "Suzume", rating: 4.5, image: suzumeImg },
    { title: "Jurassic World", rating: 4.5, image: jurasicImg },
    { title: "Sonic 2", rating: 4.5, image: sonicImg },
    { title: "All of Us are Dead", rating: 4.5, image: allofusImg },
    { title: "Big Hero 6", rating: 4.5, image: bigheroImg },
  ],
  trending: [
    { title: "The Tomorrow Land", rating: 4.5, image: tommorowlandImg },
    { title: "Ant-Man", rating: 4.5, image: antmanImg },
    { title: "Guardians of the Galaxy", rating: 4.5, image: gotgImg },
    { title: "A Man Called Otto", rating: 4.5, image: ottoImg },
    { title: "The Little Mermaid", rating: 4.5, image: mermaidImg },
  ],
  newRelease: [
    { title: "The Little Mermaid", rating: 4.5, image: mermaidImg },
    { title: "Duty After School", rating: 4.5, image: dasImg },
    { title: "Big Hero 6", rating: 4.5, image: bigheroImg },
    { title: "All Of Us Are Dead", rating: 4.5, image: allofusImg },
    { title: "Missing", rating: 4.5, image: missingImg },
  ]
};

function MovieCarousel({ label, category }) {
  const scrollRef = useRef();

  const scroll = (direction) => {
    const scrollAmount = 300;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  const movies = movieCategories[category] || [];

  return (
    <div className="carousel-wrapper">
      <h2>{label}</h2>
      <button className="scroll-button left" onClick={() => scroll('left')}>
        <FaChevronLeft />
      </button>

      <div className="movie-carousel" ref={scrollRef}>
        {movies.map((movie) => (
          <div className="movie-card" key={movie.title}>
            <img src={movie.image} alt={movie.title} />
            <div className="title">{movie.title}</div>
            <div className="rating">
  <img src={starIcon} alt="Star" className="star-icon" />
  {movie.rating}/5
</div>
          </div>
        ))}
      </div>

      <button className="scroll-button right" onClick={() => scroll('right')}>
        <FaChevronRight />
      </button>
    </div>
  );
}

export default MovieCarousel;
