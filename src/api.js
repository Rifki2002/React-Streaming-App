import axios from "axios";

const PROJECT_ID = import.meta.env.VITE_PROJECT_ID;
const BASE_URL = import.meta.env.VITE_BASE_URL;

function getField(field) {
  if (!field) return null;
  if (field.stringValue !== undefined) return field.stringValue;
  if (field.integerValue !== undefined) return field.integerValue;
  if (field.doubleValue !== undefined) return field.doubleValue;
  if (field.booleanValue !== undefined) return field.booleanValue;
  return null;
}

export async function getMovies() {
  const res = await axios.get(BASE_URL);
  return res.data.documents.map(doc => ({
    id: doc.name.split("/").pop(),
    title: getField(doc.fields.title) || "Untitled",
    year: getField(doc.fields.year) || "Unknown",
    rating: getField(doc.fields.rating) || "N/A",
    poster: getField(doc.fields.poster) || "",
  }));
}

export async function addMovie(movie) {
  const body = {
    fields: {
    title: { stringValue: movie.title },
    year: { integerValue: Number(movie.year) },
    rating: { doubleValue: Number(movie.rating) },
    poster: { stringValue: movie.poster },
    },
  };
  const res = await axios.post(BASE_URL, body);
  return {
    id: res.data.name.split("/").pop(),
    title: res.data.fields.title.stringValue,
    year: res.data.fields.year.integerValue,
    rating:
    res.data.fields.rating.doubleValue ||
    res.data.fields.rating.integerValue,
    poster: res.data.fields.poster.stringValue,
  };
}

export async function updateMovie(id, movie) {
  const url = `${BASE_URL}/${id}?updateMask.fieldPaths=title&updateMask.fieldPaths=year&updateMask.fieldPaths=rating&updateMask.fieldPaths=poster`;

  const body = {
    fields: {
      title: { stringValue: movie.title },
      year: { integerValue: Number(movie.year) },
      rating: { doubleValue: Number(movie.rating) },
      poster: { stringValue: movie.poster },
    },
  };
  const res = await axios.patch(url, body);
  return {
    id: res.data.name.split("/").pop(),
    title: res.data.fields.title.stringValue,
    year: res.data.fields.year.integerValue,
    rating:
      res.data.fields.rating.doubleValue ||
      res.data.fields.rating.integerValue,
    poster: res.data.fields.poster.stringValue,
  };
}


export async function deleteMovie(id) {
  const url = `${BASE_URL}/${id}`;
  await axios.delete(url);
}
