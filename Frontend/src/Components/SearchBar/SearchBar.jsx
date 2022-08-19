import React, { useState } from "react";


const SearchBar = ({foundSong}) => {
 
  const [searchSongs, setSearchSongs] = useState('');

  let handleSearch = (event) => {
    let searchLibrary = event.target.value.toLowercase();
    setSearchSongs(searchLibrary);
    foundSong(searchLibrary);
  }

  return (
    <div >
      <form>
        <div>
          <input type="text" value={searchSongs} onChange={handleSearch} placeholder="Ex: Scootie Wop" />{" "}
          <button type="submit">Search Music Library</button>
        </div>  
      </form>
    </div>
  );
};
export default SearchBar;