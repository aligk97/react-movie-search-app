import React from 'react'
import MovieCard from './MovieCard'

function MovieList({ movies, handleSelectMovie }) {
  return (
    <div className='movie-list'>
      {movies.map (movie => (
        <MovieCard key={movie.imdbID} movie={movie} handleSelectMovie={handleSelectMovie}></MovieCard>
      ))}
    </div>
  )
}

export default MovieList