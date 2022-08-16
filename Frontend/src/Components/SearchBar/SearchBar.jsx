import React, { useState } from "react";


const SearchBar = (props) => {
  const [songSearch, setSongSearch] = useState("");

  function searchResults(event) {
    event.preventDefault();
    const lowerCaseSongSearch = songSearch.toLowerCase();
    const searchCols = ['album', 'artist', 'title', 'genre', 'release_date'];
    let response = props.songs.filter((song) => {

      if (
        searchCols.some(element => song[element]            
          .toLowerCase()          
          .includes(lowerCaseSongSearch)
        )
      ) return true
  });
    console.log(response)
    props.setSongs(response);
  }

  return (
    <div >
      <form onSubmit={searchResults}>
        <div>
          <input type="text" value={songSearch} onChange={(e) => setSongSearch(e.target.value)} placeholder="Ex: Scootie Wop" />{" "}
          <button type="submit">Search Music Library</button>
        </div>  
      </form>
    </div>
  );
};
export default SearchBar;