import { useState } from "react";
import "./myList.css";

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
    <div className="my-list-ml">
      <h1>Daftar Saya</h1>

      <form onSubmit={handleSubmit} className="movie-form-ml">
        <input
          type="text"
          placeholder="Movie Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
        <button type="submit">{editId ? "Update Movie" : "Add Movie"}</button>
      </form>

      <div className="movie-list-ml">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card-ml">
            <h3>{movie.title}</h3>
            <p>{movie.genre}</p>
            <button onClick={() => handleEdit(movie)}>✏️ Edit</button>
            <button onClick={() => handleDelete(movie.id)}>🗑️ Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyList;
