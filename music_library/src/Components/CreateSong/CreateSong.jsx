import React, {Component} from 'react';
import axios from 'axios';

class CreateSong extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: '',
            artist: '',
            album: '',
            genre: '',
            releaseDate: ''
         }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })

    }
    handleSubmit = (event) => {
        let response = axios.post('http://127.0.0.1:8000/music/')
        event.preventDefault();
        this.setState({
        library: response.data
        }
        )}

    render(){ 
        return ( 
            <form onSubmit={(event) => this.handleSubmit(event)}>
            <div>
                <label>Title: </label>
                <input type= 'text' name='title' onChange={this.handleChange} value={this.state.songs}></input>
                <label>Artist: </label>
                <input type= 'text' name='artist' onChange={this.handleChange} value={this.state.songs}></input>
                <label>Album: </label>
                <input type= 'text' name='album' onChange={this.handleChange} value={this.state.songs}></input>
                <label>Genre: </label>
                <input type= 'text' name='genre' onChange={this.handleChange} value={this.state.songs}></input>
                <label>Release Date: </label>
                <input type= 'text' name='title' onChange={this.handleChange} value={this.state.songs}></input>
                <button onClick={()=>this.handleSubmit('')}>Add Song</button>
            </div>
            </form>
                 
        );
    }
}
 
export default CreateSong;