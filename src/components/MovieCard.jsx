import React from 'react'

function MovieCard({ movie, handleSelectMovie }) {

  function onMovieClick() {
    handleSelectMovie(movie);
  }
  return (
    <div className='movie-card' onClick={onMovieClick}> 
      <img src={movie.Poster != "N/A" ? movie.Poster : "https://placehold.co/300x450?text=No+Image"} alt={movie.Title} />
      <h2>{movie.Title}</h2>
      <p>{movie.Year}</p>
    </div>
  )
}

export default MovieCard