import React from "react"
function SearchBar({setSearch}){
    return (
    <div className="searchbar">
    <label className="search" htmlFor="search">Search for something rad: </label>
    <input
      type="text"
      id="search"
      placeholder="Type a name to search..."
      onChange={(e) => setSearch(e.target.value)}
    />
  </div>
)}

export default SearchBar