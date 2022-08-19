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
    let response = await axios.delete(`/music/${songs.id}/`, entry);
    console.log(response.data);
}
   
return (
    
    <div>
      <div>
        <NavBar />
        <SearchBar songs={songs} setSongs={setSongs} />
        <DisplayMusic parentEntries={songs} deleteSongProperty={deleteSong} />
        <AddNewSong addNewSongProperty={addSong}  />
      </div>
     </div>
  );
}

export default App;
