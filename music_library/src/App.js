import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  getAll = async () => {
    await axios
      .get("http://127.0.0.1:8000/music/")
      .then((res) => this.setState({songs:res.data}))
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <button onClick={this.getAll}> Click for All Songs</button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
