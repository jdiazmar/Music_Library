import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayMusic from './Components/DisplayMusic/DisplayMusic';
import AddNewSong from './Components/AddNewSong/AddNewSong';
import SearchBar from './Components/SearchBar/SearchBar';
import NavBar from './Components/NavBar/NavBar';



function App() {

  const [songs, setSongs] = useState([]);

  useEffect(() => {
      getAllSongs();
  }, [addSong]);
  
  async function getAllSongs(){
    const response = await axios.get('http://127.0.0.1:8000/music/');
    setSongs(response.data);
  };

  async function addSong(newSong){
    const response = await axios.post('http://127.0.0.1:8000/music/', newSong);
    if(response.status === 201){
    await getAllSongs();
   }
  };

  async function deleteSong(entry){
    let response = await axios.delete(`/music/${entry.id}/`, null);
    if(response.status === 204){
      await getAllSongs();
    }
}

const [songSearch, setSongSearch] = useState("");

function searchLibrary(props){
  let filterLibrary = songSearch.filter((element) => {
    if(element.title.toLowercase().includes(props)){
      return true
    }
    else if(element.artist.toLowercase().includes(props)){
      return true
    }
    else if(element.album.toLowercase().includes(props)){
      return true
    }
    else if(element.release_date.toLowercase().includes(props)){
      return true
    }
    else if(element.genre.toLowercase().includes(props)){
      return true
    }
  })
  setSongSearch(filterLibrary);
}
   
return (
    
    <div className='class="p-3 mb-2 bg-secondary text-white">.bg-secondary' >
      <div className='container-md'>
        <div className='row'>
          <div>
            <NavBar />
          </div>
        </div>
        <div className='col-md-12' >
          <SearchBar  foundSong={searchLibrary} />
          <DisplayMusic parentEntries={songs} deleteSongProperty={deleteSong} />
          <AddNewSong addNewSongProperty={addSong}  />
        </div>
      </div>
     </div>
  );
}

export default App;
