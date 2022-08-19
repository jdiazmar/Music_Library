

const DisplayMusic = (props) => {



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
                {props.parentEntries.map((entry) => {
                    return (

                        <tr >
                            <td>{entry.title}</td>
                            <td>{entry.artist}</td>
                            <td>{entry.album}</td>
                            <td>{entry.release_date}</td>
                            <td>{entry.genre}</td>
                            <td> <button type="submit" onClick={() => props.deleteSongProperty(entry)} >Delete Song</button> </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
     );
}
 
export default DisplayMusic;

