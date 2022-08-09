import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayMusic from './Components/DisplayMusic/DisplayMusic';
import AddNewSong from './Components/AddNewSong/AddNewSong';

function App() {

  const [songs, setSongs] = useState([]);

  useEffect(() => {
      getAllSongs();
  }, []);
  
  async function getAllSongs(){
    const response = await axios.get('http://127.0.0.1:8000/music/');
    console.log(response.data);
    setSongs(response.data);
  }

  const [entries, setEntries] = useState([])

  function addNewSong(entry) {
  let userEntries = [...entries, entry];
  setEntries(userEntries);
  
} 
  


  return (
    
    <div>
      <div>
        <DisplayMusic parentEntries={songs}  />
        <AddNewSong AddNewSongProperty={addNewSong} />
      </div>
     </div>
  );
}

export default App;
