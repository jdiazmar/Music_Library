import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayMusic from './Components/DisplayMusic/DisplayMusic';
import AddNewSong from './Components/AddNewSong/AddNewSong';



function App() {

  const [songs, setSongs] = useState([]);

  useEffect(() => {
      getAllSongs();
  }, [addSong], []);
  
  async function getAllSongs(){
    const response = await axios.get('http://127.0.0.1:8000/music/');
    console.log(response.data);
    setSongs(response.data);
  };

  async function addSong(newSong){
    const response = await axios.post('http://127.0.0.1:8000/music/', newSong);
    return response.data;
  };

  async function deleteSong(entry){
    let response = await axios.delete('http://127.0.0.1:8000/music/', entry);
    return response.data;
  }
  
 
  
  return (
    
    <div>
      <div>
        <DisplayMusic parentEntries={songs} deleteSongProperty={deleteSong} />
        <AddNewSong addNewSongProperty={addSong}  />
      </div>
     </div>
  );
}

export default App;
