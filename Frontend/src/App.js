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

function searchLibrary(query){
  let newArray = []
  for(let i = 0; i < songs.length; i++){
    if(songs[i].title.toLowerCase().includes(query) ||
       songs[i].artist.toLowerCase().includes(query) ||
       songs[i].album.toLowerCase().includes(query) ||
       songs[i].release_date.toLowerCase().includes(query) ||
       songs[i].genre.toLowerCase().includes(query)){
        newArray.push(songs[i]);
       }
  }setSongs(newArray)
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
          <SearchBar queryData={searchLibrary} />
          <DisplayMusic parentEntries={songs} deleteSongProperty={deleteSong} />
          <AddNewSong addNewSongProperty={addSong}  />
        </div>
      </div>
     </div>
  );
}

export default App;
