import React from 'react';
import axios from 'axios';
import "./MusicLibrary.css"

function MusicLibrary(props){
    return ( 
        <div><h1>Welcome to the Music Library!</h1>
        <table class="center">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Genre</th>
                    <th>Release Date</th>
                </tr>
            </thead>
            <tbody>
                {props.songs.map(song =>
                    <tr>
                        <td>{song.title}</td>
                        <td>{song.artist}</td>
                        <td>{song.album}</td>
                        <td>{song.genre}</td>
                        <td>{song.release_date}</td>
                        <button onClick={()=>{props.deleteSong(song)}}>Delete</button>
                        </tr>
                        )}
                </tbody>
            </table>
        </div>
         );

         
    function deleteSong(){
    axios.delete('http://127.0.0.1:8000/music/')
    .then(response => this.setState({
      songs: response.data
    })
  )}
}
                             
export default MusicLibrary;