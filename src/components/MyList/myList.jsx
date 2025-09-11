import { useState, useEffect } from "react";
import { useMoviesStore } from "../../store/useMoviesStore";


function MyList() {
  const {
    movies,
    fetchMovies,
    addMovie,
    updatedMovie,
    deleteMovie,
    loading,
    error,
  } = useMoviesStore();

  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [rating, setRating] = useState("");
  const [poster, setPoster] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchMovies();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !year || !rating || !poster) return alert("Please fill all fields");

    const movieData = { title, year, rating, poster };

    if (editId) {
      await  updatedMovie(editId, movieData);
      setEditId(null);
    } else {
      await addMovie(movieData);
    }

    setTitle("");
    setYear("");
    setRating("");
    setPoster("");
  };

  const handleEdit = (movie) => {
    setTitle(movie.title);
    setYear(movie.year);
    setRating(movie.rating);
    setPoster(movie.poster);
    setEditId(movie.id);
  };

  return (
    <div className="px-5 pt-24">
      <h1 className="text-3xl font-bold text-white mb-6">My Movie List</h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-3 mb-6 flex-wrap"
      >
        <input
          type="text"
          placeholder="Movie Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="px-3 py-2 rounded-md border border-gray-600 bg-gray-800 text-white flex-1"
        />
        <input
          type="number"
          placeholder="Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="px-3 py-2 rounded-md border border-gray-600 bg-gray-800 text-white w-28"
        />
        <input
          type="number"
          step="0.1"
          placeholder="Rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="px-3 py-2 rounded-md border border-gray-600 bg-gray-800 text-white w-28"
        />
        <input
          type="text"
          placeholder="Poster URL"
          value={poster}
          onChange={(e) => setPoster(e.target.value)}
          className="px-3 py-2 rounded-md border border-gray-600 bg-gray-800 text-white flex-1"
        />
        <button
          type="submit"
          className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white transition disabled:opacity-50"
          disabled={loading}
        >
          {editId ? "Update Movie" : "Add Movie"}
        </button>
      </form>

      {loading && <p className="text-gray-400">Loading movies...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      <div className="flex flex-wrap gap-5">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="relative bg-[#1a1a1a] rounded-xl w-[180px] h-[350px] text-white shadow-lg overflow-hidden transform transition-transform hover:scale-110 cursor-pointer"
          >
            <img
              src={movie.poster}
              alt={movie.title}
              className="w-full h-[220px] object-cover"
            />
            <div className="p-3">
              <h3 className="font-semibold text-lg truncate w-full">
                {movie.title}
              </h3>
              <p className="text-sm text-gray-300">{movie.year}</p>
              <p className="text-sm text-yellow-400">⭐ {movie.rating}</p>
            </div>

            <div className="absolute bottom-3 left-3 flex gap-2">
              <button
                onClick={() => handleEdit(movie)}
                className="px-3 py-1 rounded-md bg-yellow-500 hover:bg-yellow-600 text-black text-sm"
              >
                ✏️ Edit
              </button>
              <button
                onClick={() => deleteMovie(movie.id)}
                className="px-3 py-1 rounded-md bg-red-600 hover:bg-red-700 text-white text-sm"
              >
                🗑️ Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyList;
