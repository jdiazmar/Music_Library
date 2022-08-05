import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayMusic from './Components/DisplayMusic/DisplayMusic';
import AddNewSong from './Components/AddNewSong/AddNewSong';

function App() {

  const [entries, setEntries] = useState([{title: 'Painting Pictures', artist: 'Tj Carrol', album: 'Painting Pictures', release_date: '2022-07-28', genre: 'Hip-Hop'}])
    
  function addNewSong(entry) {
    let tempEntries = [entry, ...entries];
    setEntries(tempEntries);

  }

  const [songs, setSongs] = useState([]);

  useEffect(() => {
      getAllSongs();
  }, []);
  
  async function getAllSongs(){
    const response = await axios.get('http://127.0.0.1:8000/music/');
    console.log(response.data);
    setSongs(response.data);
  }
  


  return (
    
    <div>
      <div>
        <DisplayMusic userEntries={songs} />
      </div>
      <div>
        <AddNewSong addNewSongProperty={addNewSong}/>
      </div>
      <div>   
          <button onClick={() => getAllSongs()}>Get All Songs!</button>
      </div>
    </div>
  );
}

export default App;
