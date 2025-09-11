import { create } from "zustand";
import * as api from "../api";


const withLoading = async (set, fn) => {
  try {
    set({loading : true, error : null});
    await fn();
  }catch(err) {
    set({error: err.message, loading: false});
  }
}

export const useMoviesStore = create((set, get) => ({
  movies: [],
  loading: false,
  error: null,

  fetchMovies: async () => {
    await withLoading(set, async () => {
      const movies = await api.getMovies();
      set({ movies, loading: false });
    });
  },

  addMovie: async (movie) => {
    await withLoading(set, async () => {
      const newMovie = await api.addMovie(movie);
      set({ movies: [...get().movies, newMovie], loading: false });
    });
  },

  updatedMovie: async (id, movie) => {
    await withLoading(set, async () => {
      const updateMovie = await api.updateMovie(id, movie);
      set({
        movies: get().movies.map((m) => (m.id === id ? updateMovie : m)),
        loading: false,
      });
    });
  },

  deleteMovie: async (id) => {
    await withLoading(set, async () => {
      await api.deleteMovie(id);
      set({ movies: get().movies.filter((m) => m.id !== id), loading: false });
    });
  },
}));
