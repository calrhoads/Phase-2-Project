import React from "react"
function SearchBar({setSearch}){
    return (
    <div className="searchbar">
    <label htmlFor="search">Search for something rad: </label>
    <input
      type="text"
      id="search"
      placeholder="Type a name to search..."
      onChange={(e) => setSearch(e.target.value)}
    />
  </div>
)}

export default SearchBar