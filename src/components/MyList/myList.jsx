import { useState } from "react";

function MyList() {
  const [movies, setMovies] = useState([
    { id: 1, title: "Inception", genre: "Sci-Fi" },
    { id: 2, title: "Interstellar", genre: "Sci-Fi" },
  ]);

  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [editId, setEditId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !genre) return alert("Please fill all fields");

    if (editId) {
      setMovies(
        movies.map((movie) =>
          movie.id === editId ? { ...movie, title, genre } : movie
        )
      );
      setEditId(null);
    } else {
      const newMovie = { id: Date.now(), title, genre };
      setMovies([...movies, newMovie]);
    }

    setTitle("");
    setGenre("");
  };

  const handleDelete = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  const handleEdit = (movie) => {
    setTitle(movie.title);
    setGenre(movie.genre);
    setEditId(movie.id);
  };

  return (
    <div className="px-5 pt-24">
      <h1 className="text-3xl font-bold text-white mb-6">Daftar Saya</h1>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-3 mb-6"
      >
        <input
          type="text"
          placeholder="Movie Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="px-3 py-2 rounded-md border border-gray-600 bg-gray-800 text-white flex-1"
        />
        <input
          type="text"
          placeholder="Genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          className="px-3 py-2 rounded-md border border-gray-600 bg-gray-800 text-white flex-1"
        />
        <button
          type="submit"
          className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white transition"
        >
          {editId ? "Update Movie" : "Add Movie"}
        </button>
      </form>

      {/* Movie List */}
      <div className="flex flex-wrap gap-5">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="relative bg-[#1a1a1a] rounded-xl w-[180px] h-[350px] text-white shadow-lg overflow-hidden transform transition-transform hover:scale-110 cursor-pointer"
            style={{
              backgroundImage: "url('/src/assets/roll.png')",
              backgroundSize: "240px",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="p-3">
              <h3 className="font-semibold text-lg">{movie.title}</h3>
              <p className="text-sm text-gray-300">{movie.genre}</p>
            </div>

            <div className="absolute bottom-3 left-3 flex gap-2">
              <button
                onClick={() => handleEdit(movie)}
                className="px-3 py-1 rounded-md bg-yellow-500 hover:bg-yellow-600 text-black text-sm"
              >
                ✏️ Edit
              </button>
              <button
                onClick={() => handleDelete(movie.id)}
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
