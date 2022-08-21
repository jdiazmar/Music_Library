import React, { useState } from "react";


const SearchBar = (props) => {
 
  const [query, setQuery] = useState('');

  function handleSubmit(event){
    event.preventDefault();
    let foundSearch = query.toLocaleLowerCase();
    console.log(foundSearch);
    props.queryData(foundSearch)
  }

  return (
    <div >
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Ex: Scootie Wop" />{" "}
          <button type="submit">Search Music Library</button>
        </div>  
      </form>
    </div>
  );
};
export default SearchBar;