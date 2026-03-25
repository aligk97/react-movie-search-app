import { useState } from "react";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import MovieModal from "./components/MovieModal";


import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);
  // const movies = [
  //     {
  //     imdbID: "1",
  //     Title: "Inception",
  //     Year: "2010",
  //     Poster: "https://placehold.co/300x450?text=Inception",
  //   },
  //   {
  //     imdbID: "2",
  //     Title: "Interstellar",
  //     Year: "2014",
  //     Poster: "https://placehold.co/300x450?text=Interstellar",
  //   },
  //   {
  //     imdbID: "3",
  //     Title: "The Dark Knight",
  //     Year: "2008",
  //     Poster: "https://placehold.co/300x450?text=The+Dark+Knight",
  //   },
  // ]

  const filteredMovies = movies.filter((movie) =>
    movie.Title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

   function handleSelectMovie(movie) {
    setSelectedMovie(movie);
  }

  function handleCloseModal() {
    setSelectedMovie(null);
  }

  async function handleSearch() {
    if (searchTerm.trim() === "") return;
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_OMDB_API_KEY}&s=${searchTerm}`,
      );
      const data = await response.json();
      if (data.Response === "True") {
        setMovies(data.Search);
      } else {
        console.error("Error fetching movies:", data.Error);
        setMovies([]);
        setError(data.Error);
      }
    } catch (error) {
      setMovies([]);
      setError("Failed to fetch movies.");

      console.error("Network error:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="app">
      <h1 className="title">Movie Search App</h1>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onSearch={handleSearch}
        loading={loading}
      ></SearchBar>

      {error && <p className="error">{error}</p>}

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <MovieList
            movies={filteredMovies}
            handleSelectMovie={handleSelectMovie}
          ></MovieList>
        </div>
      )}

      {!loading && movies.length === 0 && !error && (
        <p className="no-results">Try searching for something else.</p>
      )}

      {selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;
