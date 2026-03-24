import { useState } from 'react'
import SearchBar from './components/SearchBar'
import MovieList from './components/MovieList'

import './App.css'

function App() {

  const [searchTerm, setSearchTerm] = useState('')


  const movies = [
      {
      imdbID: "1",
      Title: "Inception",
      Year: "2010",
      Poster: "https://placehold.co/300x450?text=Inception",
    },
    {
      imdbID: "2",
      Title: "Interstellar",
      Year: "2014",
      Poster: "https://placehold.co/300x450?text=Interstellar",
    },
    {
      imdbID: "3",
      Title: "The Dark Knight",
      Year: "2008",
      Poster: "https://placehold.co/300x450?text=The+Dark+Knight",
    },
  ]


  function handleSearch(){
    console.log('Searching for:', searchTerm)  
  }

  return (
    <div className='app'>
      <h1 className='title'>Movie Search App</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} onSearch={handleSearch}></SearchBar>
      <MovieList movies = {movies}></MovieList>

    </div>
 
  )
}

export default App
