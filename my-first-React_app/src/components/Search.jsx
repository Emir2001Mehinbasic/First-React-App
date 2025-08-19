import React from 'react'

function Search({searchTerm , setSearchTerm}) {
  return (
    <div className='search'>
        <div><img src='search.svg' alt="search"></img>

        <input type='text' placeholder='Search trough movies'
        value={searchTerm}
        onChange={(event)=> setSearchTerm(event.target.value)}></input>
            </div>
            
            </div>
  )
}

export default Search