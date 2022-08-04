import React, { useState } from 'react';
import DisplayMusic from './Components/DisplayMusic/DisplayMusic';
import AddNewSong from './Components/AddNewSong/AddNewSong';

function App() {

  const [entries, setEntries] = useState([{title: 'Painting Pictures', artist: 'Tj Carrol', album: 'Painting Pictures', release_date: '2022-07-28', genre: 'Hip-Hop'}])
    
  function addNewSong(entry) {
    let tempEntries = [entry, ...entries];
    setEntries(tempEntries);

  }


  return (
    
    <div>
      <div>
        <DisplayMusic userEntries={entries} />
      </div>
      <div>
        <AddNewSong addNewSongProperty={addNewSong}/>
      </div>
     
    </div>
  );
}

export default App;
