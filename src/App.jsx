import { useState } from 'react'
import SearchBar from './components/SearchBar'
import MovieList from './components/MovieList'

import './App.css'

function App() {

  const [searchTerm, setSearchTerm] = useState('')
  const [movies, setMovies] = useState([])
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
  


  const filteredMovies = movies.filter(movie => movie.Title.toLowerCase().includes(searchTerm.toLowerCase()))



  async function handleSearch(){
    if(searchTerm.trim() === '') return
     const response = await fetch(`http://www.omdbapi.com/?apikey=${import.meta.env.VITE_OMDB_API_KEY}&s=${searchTerm}`)
    const data = await response.json()
    if(data.Response === "True"){
      setMovies(data.Search)
    } else {
      console.error("Error fetching movies:", data.Error)
      setMovies([])
    }
  }

  return (
    <div className='app'>
      <h1 className='title'>Movie Search App</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} onSearch={handleSearch}></SearchBar>
      <MovieList movies = {filteredMovies}></MovieList>

    </div>
 
  )
}

export default App
