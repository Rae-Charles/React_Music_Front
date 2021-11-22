import React from 'react';
import "./App.css";
import axios from "axios";
import { Component } from "react";
import MusicLibrary from "./Components/MusicLibrary/MusicLibrary";
import CreateSong from './Components/CreateSong/CreateSong';
import SearchBar from './Components/SearchBar/SearchBar';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: []
    }
  }

  componentDidMount(){
    this.getSongs();
    this.deleteSong();
    this.filterSongs();
  }

  async getSongs(){
    let response = await axios.get("http://127.0.0.1:8000/music/")
    console.log(response.data);
    this.setState({
      songs: response.data
    })
  }


  filterSongs(termToFilter){
    let filteredResults = this.state.songs.filter(function(el){
      if(el.title.includes(termToFilter));
      {
        return true;
      }
    })
    this.setState({
      songs: filteredResults
    })
  }

  addSong = (songToAdd) => {
    axios
    .post('http://127.0.0.1:8000/music/', songToAdd)
    .then(response => this.setState({
      songs: response.data
    }))
  }

  deleteSong = (song) => {
    axios 
    .delete('http://127.0.0.1:8000/music/', song)
    .then(response => this.setState({
      songs: response.data
    })
  )}

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  
  render() {
    return (
      <div className="App">
        <MusicLibrary songs={this.state.songs}></MusicLibrary>
        <br></br>
        <CreateSong />
        <br></br><br></br>
        <SearchBar />
      </div>
    );
  }
}

export default App;


  // getAll = async () => {
  //   await axios
  //     .get("http://127.0.0.1:8000/music/")
  //     .then((res) => this.setState({songs:res.data}))
  // };
