import React, { useRef } from "react";
import lookupImg from "../../assets/movie1.png";
import allofusImg from "../../assets/movie2.png";
import blulockImg from "../../assets/movie3.png";
import ottoImg from "../../assets/movie4.png";
import suzumeImg from "../../assets/movie5.png";
import jurasicImg from "../../assets/movie6.png";
import sonicImg from "../../assets/movie7.png";
import bigheroImg from "../../assets/movie9.png";
import tommorowlandImg from "../../assets/movie10.png";
import antmanImg from "../../assets/movie11.png";
import gotgImg from "../../assets/movie12.png";
import mermaidImg from "../../assets/movie14.png";
import dasImg from "../../assets/movie15.png";
import missingImg from "../../assets/movie16.png";
import starIcon from "../../assets/star.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

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
  ],
};

function MovieCarousel({ label, category }) {
  const scrollRef = useRef();

  const scroll = (direction) => {
    const scrollAmount = 300;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const movies = movieCategories[category] || [];

  return (
    <div className="relative w-full px-6 py-4 text-white">
      <h2 className="ml-4 mb-4 text-xl font-semibold">{label}</h2>

      <button
        className="absolute top-1/2 left-0 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full z-10"
        onClick={() => scroll("left")}
      >
        <FaChevronLeft />
      </button>

      <div
        className="flex gap-4 overflow-x-auto scroll-smooth px-8 scrollbar-hide"
        ref={scrollRef}
      >
        {movies.map((movie) => (
          <div
            key={movie.title}
            className="flex-none bg-neutral-900 rounded-xl w-[180px] h-[350px] shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer"
          >
            <img
              src={movie.image}
              alt={movie.title}
              className="w-full h-[270px] object-cover rounded-t-xl"
            />
            <div className="px-3 pt-2 font-bold text-sm">{movie.title}</div>
            <div className="px-3 pb-3 flex items-center gap-1 text-sm">
              <img
                src={starIcon}
                alt="Star"
                className="w-4 h-4 object-contain inline-block"
              />
              {movie.rating}/5
            </div>
          </div>
        ))}
      </div>

      <button
        className="absolute top-1/2 right-0 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full z-10"
        onClick={() => scroll("right")}
      >
        <FaChevronRight />
      </button>
    </div>
  );
}

export default MovieCarousel;
