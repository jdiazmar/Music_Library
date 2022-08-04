import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DisplayMusic = (props) => {

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
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Release Date</th>
                    <th>Genre</th>
                </tr>
            </thead>
            <tbody>
                {props.userEntries.map((entry) => {
                    return (

                        <tr>
                            <td>{entry.title}</td>
                            <td>{entry.artist}</td>
                            <td>{entry.album}</td>
                            <td>{entry.release_date}</td>
                            <td>{entry.genre}</td>
                        </tr>
                    )
                })}
            </tbody>
            <div>   
                <button onClick={() => getAllSongs()}>Get All Songs!</button>
            </div>
        </table>
    </div>
     );
}
 
export default DisplayMusic;

