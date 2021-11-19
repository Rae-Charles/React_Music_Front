import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { Component } from "react";
import MusicLibrary from "./Components/MusicLibrary/MusicLibrary";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: []
    }
  }

  componentDidMount(){
    this.getSongs();
  }

  async getSongs(){
    let response = await axios.get("http://127.0.0.1:8000/music/")
    console.log(response.data);
    this.setState({
      songs: response.data
    })
  }

  render() {
    return (
      <div className="App">
        <MusicLibrary songs={this.state.songs}></MusicLibrary>

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

  // handleChange = (event) => {
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   })
  // }
