import React from 'react'

function SearchBar({ searchTerm, setSearchTerm, onSearch, loading  }) {
  return (
    <div className='search-bar'>
      <input 
        type="text" 
        placeholder='Search for movies...' 
        value={searchTerm}
        disabled={loading}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            onSearch()
          }
        }}></input>
      <button disabled={loading || searchTerm.trim() === ""} onClick={onSearch}>
        {loading ? 'Searching...' : 'Search'}
      </button>
    </div>
  )
}

export default SearchBar