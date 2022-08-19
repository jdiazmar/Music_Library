import { useState } from "react";
import './AddNewSong.css';



const AddNewSong = ({addNewSongProperty}) => {

const [title, setTitle] = useState('');
const [artist, setArtist] = useState('');
const [album, setAlbum] = useState('');
const [release_date, setRelease_Date] = useState('');
const [genre, setGenre] = useState('');

function handleSubmit(event) {
    event.preventDefault();
    let newSong = {
        title: title,
        artist: artist,
        album: album,    
        release_date: release_date,
        genre: genre
    };

    addNewSongProperty(newSong);
    // axios
    //     .post(
    //         'http://127.0.0.1:8000/music/post.json', 
    //         newSong,
    //     )
    //     .then((response) => {
    //         console.log(response);
    //     });
}



    return ( 
        <form onSubmit={handleSubmit}>
        <div>
            <label>Title</label>
            <input type='text'  value={title} onChange={(event) => setTitle(event.target.value)} />
        
            <label>Artist</label>
            <input type='text'  value={artist} onChange={(event) => setArtist(event.target.value)} />

            <label>Album</label>
            <input type='text'  value={album} onChange={(event) => setAlbum(event.target.value)} />
       
            <label>Release Date</label>
            <input type='date'  value={release_date} onChange={(event) => setRelease_Date(event.target.value)} />
      
            <label>Genre</label>
            <input type='text'  value={genre} onChange={(event) => setGenre(event.target.value)} />

            <button type='submit' class="btn btn-primary btn-sm" >Add New Song</button>
        </div>
        
    </form>
     );
}
 
export default AddNewSong;