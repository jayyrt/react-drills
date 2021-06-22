import React, { Component } from 'react';
import './App.css';

import axios from "axios";

class App extends Component {
  constructor() {
    super();

    this.state = {
      lukeSkywalker: {
        name: 'Luke Skywalker',
        birth_year: '1993',
        height: '6 feet',
        eye_color:'Brown',
      }
    };
  }

  componentDidMount() {
    axios.get("https://swapi.co/api/people/1").then(response => {
      this.setState({
        lukeSkywalker: response.data
      });
    });
  }

  render() {
    return (
      <div className="App">
      <h1>Name: {this.state.lukeSkywalker.name}</h1>
      <h1>Birth Year: {this.state.lukeSkywalker.birth_year}</h1>
      <h1>Height: {this.state.lukeSkywalker.height}</h1>
      <h1>Eye Color: {this.state.lukeSkywalker.eye_color}</h1>
      </div>
    );
  }
}

//function App() {
//  return (
//    <div className="App">
//      <header className="App-header">
//        <img src={logo} className="App-logo" alt="logo" />
//        <p>
//          Edit <code>src/App.js</code> and save to reload.
//        </p>
//        <a
//          className="App-link"
//          href="https://reactjs.org"
//          target="_blank"
//          rel="noopener noreferrer"
//        >
//          Learn React
//        </a>
//      </header>
//    </div>
//  );
//}

export default App;
