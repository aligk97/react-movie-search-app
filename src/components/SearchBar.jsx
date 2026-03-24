import React from 'react'

function SearchBar({ searchTerm, setSearchTerm, onSearch }) {
  return (
    <div className='search-bar'>
      <input 
        type="text" 
        placeholder='Search for movies...' 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      ></input>
      <button onClick={onSearch}>Search</button>
    </div>
  )
}

export default SearchBar